import React, {useState} from 'react';

function TodoForm() {
    const[input, setInput] = useState('')
  return (
    <forn className="todo-form">
        <input 
            type='text'
            placeholder='Add a todo'
            value={input}
            name='text'
            className='todo-input'
        />
    </forn>
  )
}

export default TodoForm