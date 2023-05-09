import { useState } from 'react';
import '../../../App.css';
import '@fontsource/poppins';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../../redux/modules/todos.js';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

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
    <>
      <StForm onSubmit={onSubmitHandler}>
        <StInputBox
          className='box'
          type='text'
          name='title'
          value={todo.title}
          onChange={onChangeHandler}
          placeholder='Add title..'
        />
        <StInputBox
          className='box'
          type='text'
          name='task'
          value={todo.task}
          onChange={onChangeHandler}
          placeholder='Add task..'
        />
        <button className='button'>Add</button>
      </StForm>
    </>
  );
}

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 40px;
  width: 1007px;
  height: 62px;
`;

const StInputBox = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px;
  width: 300px;
  height: 24px;
  border-style: none;
  background: #f7f7f7;
  border-radius: 16px;
`;
