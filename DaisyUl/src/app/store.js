import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/userslice'
import postReducer from '../slice/postSlice';
import getPostReducer from "../slice/getPostSlice"
export const store=configureStore({
    reducer:{
       user: userReducer,
       post:postReducer,
       getPostData:getPostReducer
    }
})

