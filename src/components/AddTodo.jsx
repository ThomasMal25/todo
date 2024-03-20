import React, { useState } from 'react';
import Main from './Main';
function AddTodo() {
  const [todo, setTodo] = useState({
    title: '',
    done: '',
  });

  const [text, setText] = useState('');

  const setInput = (e) => {
    setText(e.target.value);
  };

  const setOnChangeTodo = () => {
    setTodo({
      title: text,
      done: 'todo',
    });
    setText('');
  };

  return (
    <div>
      <input type="text" value={text} onChange={setInput} />
      <button onClick={() => setOnChangeTodo()}>Add to do </button>
      <Main todo={todo} />
    </div>
  );
}

export default AddTodo;
