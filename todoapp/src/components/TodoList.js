// Đây là list các việc làm
import React from 'react';
import Todo from './Todo';
const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo, index) => {
                    return (
                        <Todo
                            todos={todos}
                            setTodos={setTodos}
                            text={todo.text}
                            key={todo.id}
                            todo={todo} />
                    );
                })}
            </ul>
        </div>
    )
}

export default TodoList;