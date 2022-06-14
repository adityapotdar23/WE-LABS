import React from "react"
import TodoItem from "./ToDoItem";

function TodosList(props) {
        return (
            <ul>
                {props.todos.map(todo => (
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    onChange={() => props.handleChangeProps()}
                  />
                ))}
            </ul>
        )
    }

export default TodosList
