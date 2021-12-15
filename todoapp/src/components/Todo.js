import React from 'react';

const Todo = ({ text, todo, setTodos, todos }) => {
    // Events
    const deleteHandler = () => {
        // Dùng filter để lọc ra tất cả các todo có id khác với id của el cần xoá (để giữ lại các thành đó)
        // filter sẽ trả ra mảng các todo có id khác với id của el cần xoá
        // setTodos sẽ gán giá trị của filter trả ra vào todos mới
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;