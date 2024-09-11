import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';
import { formatDistanceToNowStrict } from 'date-fns';
// import { DateTime } from 'luxon';
import { fetchData } from '../redux/slices/popularSlice'; 

const Reddit = () => {
  const dispatch = useDispatch();
  
  
  const data = useSelector((state) => state.popularSlice.data); 
  const loading = useSelector((state) => state.popularSlice.loading); 

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.data || !Array.isArray(data.data.children)) {
    return <div>Loading or no data available</div>;
  } 

  return (
    <div>
      {data.data.children.map((item, index) => {
        const post = item.data;
        // const timeAgo = moment.unix(post.created_utc).fromNow();
        const timeAgo = formatDistanceToNowStrict(new Date(post.created_utc * 1000));
        // const postDate = DateTime.fromSeconds(post.created_utc);
        // const timeAgo = postDate.toRelative();
        
        return (
          <div key={post.id} className="card p-2 mb-3" style={{ width: '18rem' }}>
            <h5 className="card-title mb-2">{post.title}</h5>
            <img
              src={post.thumbnail && post.thumbnail !== 'self' ? post.thumbnail : 'default-placeholder-image.jpg'}
              className="card-img-top mb-1"
              alt={post.title}
            />
            <div className="card-body mb-2">
              <p class="card-text">Post by {post.author}, {timeAgo} ago, {post.num_comments} comments</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reddit;
