import { useState } from 'react';
import Main from './components/Main';
import './App.css';
import AddTodo from './components/AddTodo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddTodo />
    </>
  );
}

export default App;
