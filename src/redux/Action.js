import * as types from "./ActionTypes";

export const completeTodo = (todo)=>{
    return{
        type: types.COMPLETE_TODO,
        payload:todo
    }
};

export const addTodo=(todo)=>{
    return{
        type:types.ADD_TODO,
        payload:todo
    }
};

export const removeTodo=(todo)=>{
    return{
        type:types.REMOVE_TODO,
        payload:todo,
    }
};

export const updateTodo=(todo)=>{
    return{
        type:types.UPDATE_TODO,
        payload:todo
    }
}