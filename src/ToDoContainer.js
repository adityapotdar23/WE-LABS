import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import { useState } from "react";
function TodoContainer (props) {
    const [state, setState] = useState({
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    });
    const handleChange = id => {
        setState(prevState => {
            return {
              todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  }
                }
                return todo
              }),
            }
          })
    };
    return (
        <div>
            <Header />
            <TodosList todos={state.todos} handleChangeProps={handleChange} />
        </div>
    );
    }
    

export default TodoContainer
