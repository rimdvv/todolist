import { useState } from 'react';
import '../App.css';
import '@fontsource/poppins';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/modules/todo';
import { useDispatch } from 'react-redux';

export default function Form() {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    title: '',
    task: '',
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() === '' || todo.task.trim() === '') {
      return;
    }
    dispatch(addTodo(todo));
    setTodo({
      id: uuidv4(),
      title: '',
      task: '',
      isDone: false,
    });
  };

  return (
    <div className='app'>
      <div className='top'>
        <h1 className='title'>MY TASKS</h1>
        <form onSubmit={onSubmitHandler} className='form'>
          <input
            className='box'
            type='text'
            name='title'
            value={todo.title}
            onChange={onChangeHandler}
            placeholder='Add title..'
          />
          <input
            className='box'
            type='text'
            name='task'
            value={todo.task}
            onChange={onChangeHandler}
            placeholder='Add task..'
          />
          <button className='button'>Add</button>
        </form>
      </div>
    </div>
  );
}
