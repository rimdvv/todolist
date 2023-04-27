import { useState } from 'react';
import './App.css';
import '@fontsource/poppins';

export default function App() {
  const [toDo, setToDo] = useState({ title: '', task: '' });
  const [toDos, setToDos] = useState([]);
  const { title, task } = toDo;

  const onChange = (e) => {
    const { name, value } = e.target;
    setToDo({ ...toDo, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setToDos((prev) => [...prev, toDo]);
    setToDo({ title: '', task: '' });
  };
  return (
    <div className='app'>
      <div className='top'>
        <h1 className='title'>MY TASKS</h1>
        <form onSubmit={onSubmit} className='form'>
          <input
            className='box'
            onChange={onChange}
            name='title'
            type='text'
            value={title}
            placeholder='Add title..'
          />
          <input
            className='box'
            onChange={onChange}
            name='task'
            type='text'
            value={task}
            placeholder='Add task..'
          />
          <button className='button'>Add</button>
        </form>
      </div>
      <div className='work'>
        <h2 className='title-work'>Working on it 🔥</h2>
        {toDos.map((item, index) => (
          <li key={index}>
            {item.title} {item.task}
          </li>
        ))}
      </div>
      <div className='done'>
        <h2 className='title-work'>Done 🎉</h2>
      </div>
    </div>
  );
}
