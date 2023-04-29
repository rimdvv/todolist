import { useState } from 'react';
import './App.css';
import '@fontsource/poppins';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([
    {
      id: uuidv4(),
      title: 'react',
      task: 'finish toy project',
      status: 'isworking',
    },
  ]);
  const { id, title, task, status } = toDo;

  const onChange = (e) => {
    const { name, value } = e.target;
    setToDo({ ...toDo, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo.title === '' || toDo.task === '') {
      return;
    }
    setToDos((prev) => [...prev, toDo]);
    setToDo({ title: '', task: '' });
  };
  const handleDelete = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const handleDone = (status) => {
    setToDo({ status: 'done' });
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
        <div>
          <ul>
            {toDos.map((toDo) => (
              <li className='list-row' key={toDo.id}>
                <div>{toDo.title}</div>
                <div>{toDo.task}</div>
                <div className='buttons'>
                  <button
                    className='button-done'
                    onClick={() => handleDone(toDo.status)}
                  >
                    done
                  </button>
                  <button
                    className='button-delete'
                    onClick={() => handleDelete(toDo.id)}
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
            {toDo.status === 'done'
              ? toDos.filter((toDo) => (
                  <li className='list-row' key={toDo.id}>
                    <div>{toDo.title}</div>
                    <div>{toDo.task}</div>
                    <div className='buttons'>
                      <button
                        className='button-done'
                        onClick={() => handleDone(toDo.status)}
                      >
                        done
                      </button>
                      <button
                        className='button-delete'
                        onClick={() => handleDelete(toDo.id)}
                      >
                        delete
                      </button>
                    </div>
                  </li>
                ))
              : ''}
          </ul>
        </div>
      </div>
    </div>
  );
}
