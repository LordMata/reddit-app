import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import Reddit from './components/Reddit'; 

const App = () => (
  <Provider store={store}>
    <Reddit />
  </Provider>
);

export default App;
