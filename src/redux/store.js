import { configureStore } from '@reduxjs/toolkit';
import popularSliceReducer from './slices/popularSlice'; 

const store = configureStore({
  reducer: {
    popularSlice: popularSliceReducer, 
  },
});

export default store;
