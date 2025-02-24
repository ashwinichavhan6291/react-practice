import { createSlice } from "@reduxjs/toolkit";

export const getPostSlice=createSlice({

    name:"getPosts",
    initialState:[],
    reducers:{
        addData:(state,action)=>{
            return action.payload;
        },
        removeData: (state,action)=>{
            const{_id}=action.payload;

            return state.filter((post)=>  post._id!==_id);

        }
    }
})
export const{addData,removeData}=getPostSlice.actions;
export default getPostSlice.reducer;