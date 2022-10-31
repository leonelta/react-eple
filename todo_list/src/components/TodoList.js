import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todos, ...todos];

    setTodos(newTodos);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if(todo. === id)
    })
  }

  return (
    <div>
      <h1>What's the plan for today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo />
    </div>
  )
}

export default TodoList