import { configureStore } from '@reduxjs/toolkit';
import  ProductSlice  from './Reducers/GetProductSlice';


const store = configureStore({
  reducer: {
    getProductReducer: ProductSlice 
  },
})

export default store;
