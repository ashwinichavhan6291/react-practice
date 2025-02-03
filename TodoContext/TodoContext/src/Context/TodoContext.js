import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'


export const TodoContext=createContext({

    Todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],

    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext);
}
export const Todoprovider=TodoContext.Provider;