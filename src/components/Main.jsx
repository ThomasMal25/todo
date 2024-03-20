import React, { useState } from 'react';
import data from '../tasks';

function Main() {
  const [tasks, setTasks] = useState(data);

  function setTodo(index) {
    setTasks((prevState) => {
      const updatedTasks = [...prevState];
      updatedTasks[index] = { ...updatedTasks[index], done: 'doing' };
      return updatedTasks;
    });
  }

  function setDone(index) {
    setTasks((prevState) => {
      const updatedTasks = [...prevState];
      updatedTasks[index] = { ...updatedTasks[index], done: 'done' };
      return updatedTasks;
    });
  }

  return (
    <>
      <div className="main">
        {tasks.map((item, index) => {
          if (item.done === 'todo') {
            return (
              <div className="todo" key={index}>
                <h1>Todo</h1>
                <h6>{item.title}</h6>
                <p>{item.subtasks}</p>
                <button onClick={() => setTodo(index)}>Start Doing</button>
              </div>
            );
          } else if (item.done === 'doing') {
            return (
              <div className="doing" key={index}>
                <h1>Doing</h1>
                <h6>{item.title}</h6>
                <p>{item.subtasks}</p>
                <button onClick={() => setDone(index)}>Mark as Done</button>
              </div>
            );
          } else if (item.done === 'done') {
            return (
              <div className="done" key={index}>
                <h1>Done</h1>
                <h6>{item.title}</h6>
                <p>{item.subtasks}</p>
              </div>
            );
          }
          return null; // Add a default case if needed
        })}
      </div>
    </>
  );
}

export default Main;
