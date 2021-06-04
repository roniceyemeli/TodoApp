import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import { addTodo, completeTodo, removeTodo, updateTodo } from '../redux/Action';
import Todo from './Todo';
import TodoInput from './TodoInput'
import "./TodoList.css"



const TodoList = () => {
    const todoList = useSelector((state) => ({...state.todos}));
    console.log(todoList)
    const dispatch = useDispatch();
    const create=(newTodo)=>{
        dispatch(addTodo(newTodo));
    };

    const update =(id,updatedTask)=>{
        dispatch(updateTodo(id,updatedTask))
    };

    return (
        <div className="TodoList">
            <h1>Todo App</h1>
            <TodoInput createTodo={create}/>
            <ul>
                <TransitionGroup className="todo=list">
                    {todoList.todos.map((todo) => {
                        return(
                            <CSSTransition key={todo.id} classNames="todo">
                                <Todo
                                key={todo.id}
                                id={todo.id}
                                task={todo.task}
                                isDone={todo.isDone}
                                toggleTodo={()=>dispatch(completeTodo(todo))}
                                removeTodo={()=>dispatch(removeTodo(todo))}
                                updateTodo={update}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ul>
        </div>
    );
};

export default TodoList
