import * as types from "./ActionTypes";
import {v4 as uuidv4} from "uuid";

const initialState={
    todos: [
        {
          id: 0,
          task: "Learn HTML and CSS",
          isDone: true,
        },
        {
          id: 1,
          task: "Learn REACT",
          isDone: true,
        },
        {
          id: 2,
          task: "Learn ES6",
          isDone: false,
        },
        {
          id: 3,
          task: "Learn NODE JS",
          isDone: false,
        },
      ],
    };


const todosReducer=(state=initialState,action)=> {
    switch (action.type) {
      //complete tasks
        case types.COMPLETE_TODO:
          const toggleTodos=state.todos.map(t=>t.id===action.payload.id ? {...action.payload,isDone: !action.payload.isDone}:t);
            return{
                ...state, todos:toggleTodos
            };
      //add tasks
        case types.ADD_TODO:
          const newTodo={
            id:uuidv4(),
            task:action.payload,
            isDone:false,
          };
          const addedTodos=[...state.todos,newTodo]
          return{
            ...state,todos:addedTodos
          };
      //remove tasks
          case types.REMOVE_TODO:
            const filterTodo=state.todos.filter(el=>el.id!==action.payload.id);
            return{
              ...state,todos:filterTodo

            } 
      //update tasks
          case types.UPDATE_TODO:
            const updatedTodos=state.todos.map((todo)=>{
              if(todo.id===action.payload.id){
                return { ...todo,task:action.payload.updatedTask};
              }
              else return todo;
            });
            return{
              ...state, todos:updatedTodos
            };
            
    
        default:
            return state;
    }
}


export default todosReducer