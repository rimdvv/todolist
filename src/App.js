import { useState } from 'react';
import './App.css';
import '@fontsource/poppins';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from './redux/modules/todo';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  // const [toDos, setToDos] = useState([
  //   {
  //     id: uuidv4(),
  //     title: 'react',
  //     task: 'finish toy project',
  //     isDone: false,
  //   },
  // ]);

  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === '' || task === '') {
      return;
    }
    // const newtoDo = {
    //   id: uuidv4(),
    //   title,
    //   task,
    //   isDone: false,
    // };
    // setToDos((prev) => [...prev, newtoDo]);
    dispatch(
      addTodo({
        id: uuidv4(),
        title,
        task,
        isDone: false,
      })
    );
    setTitle('');
    setTask('');
  };
  // const handleDelete = (id) => {
  //   setToDos(toDos.filter((toDo) => toDo.id !== id));
  // };

  // const handleStatus = (id) => {
  //   const donetodo = toDos.map((item) =>
  //     item.id === id ? { ...item, isDone: !item.isDone } : item
  //   );
  //   setToDos(donetodo);
  // };

  return (
    <div className='app'>
      <div className='top'>
        <h1 className='title'>MY TASKS</h1>
        <form onSubmit={onSubmit} className='form'>
          <input
            className='box'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            name='title'
            type='text'
            value={title}
            placeholder='Add title..'
          />
          <input
            className='box'
            onChange={(e) => {
              setTask(e.target.value);
            }}
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
        <div>
          <ul>
            {toDos
              .filter((item) => !item.isDone)
              .map((item) => (
                <li className='list-row' key={item.id}>
                  <div>{item.title}</div>
                  <div>{item.task}</div>
                  <div className='buttons'>
                    <button
                      className='button-done'
                      onClick={() => handleStatus(item.id)}
                    >
                      done
                    </button>
                    <button
                      className='button-delete'
                      onClick={() => handleDelete(item.id)}
                    >
                      delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className='done'>
        <h2 className='title-work'>Done 🎉</h2>
        <div>
          <ul>
            {toDos
              .filter((item) => item.isDone)
              .map((item) => (
                <li className='list-row' key={item.id}>
                  <div>{item.title}</div>
                  <div>{item.task}</div>
                  <div className='buttons'>
                    <button
                      className='button-notdone'
                      onClick={() => handleStatus(item.id)}
                    >
                      not done
                    </button>
                    <button
                      className='button-delete'
                      onClick={() => handleDelete(item.id)}
                    >
                      delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
