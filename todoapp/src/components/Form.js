// Làm phần form
import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    // Here I can write JS code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            // Spread các todo đã có sẵn
            ...todos,
            // Thêm todo mới vào tạo thành list todo
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ])
        // Sau khi nhập xong todo thì reset lại giá trị ban đầu của input
        setInputText("")
    }
    const statusHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;