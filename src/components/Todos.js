import React, {useState} from 'react';

export default function Todos() {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function addTodo(evt) {
        evt.preventDefault();
        if (newTodo) setTodoList(todoList.concat({
            id: todoList.length,
            text: newTodo
        }));
        setNewTodo('');
    };

    function updateInput(evt) {
        setNewTodo(evt.target.value);
    };

    function crossOut(id) {
        document.querySelector(`#todo-${id}`).classList.toggle('completed');
    }

    return (
        <div className="todos-container container">
            <h2>To-Do</h2>
            <div className="todos">
                {todoList.map(todo => 
                <div id={`todo-${todo.id}`}key={todo.id} className="todo">
                    <input className="button" type="button" onClick={() => crossOut(todo.id)} value="✔" /><span>{todo.text}</span>
                </div>
                )}
                <form onSubmit={addTodo}>
                    <input type="text" value={newTodo} onChange={updateInput} />
                    <input className="button" type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};
