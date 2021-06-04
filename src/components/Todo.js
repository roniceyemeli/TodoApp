import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Todo.css";

const Todo = ({ toggleTodo, task, isDone, id, removeTodo,updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  console.log(editTask)
  // const [state, setstate] = useState(initialState)

  const handleUpdate = (e)=>{
    e.preventDefault();
    updateTodo(id,editTask);
    setIsEditing(false);
  }



  return (
    <TransitionGroup className={isDone ? "Todo completed" : "Todo"}>
      {isEditing ? (
        <CSSTransition key="editing" timeout={500} classNames="form">
          <form className="Todo-edit-form" onSubmit={handleUpdate}>
            <input
              type="text"
              name="task"
              onChange={(e) => setEditTask(e.target.value)}
              value={editTask}
            />
            <button>Save</button>
          </form>
        </CSSTransition>
      ) : (
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li className="Todo-task" onClick={toggleTodo}>
            {task}
          </li>
        </CSSTransition>
      )}

      <span className="Todo-buttons">
        <button onClick={()=>setIsEditing(true)}>
          <i className="fas fa-pen" />
        </button>
        <button onClick={removeTodo}>
          <i className="fas fa-trash" />
        </button>
      </span>
    </TransitionGroup>
  );
};

export default Todo;
