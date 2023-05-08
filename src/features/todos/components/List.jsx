import '../../../App.css';
import '@fontsource/poppins';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../../../redux/modules/todos.js';

export default function List() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => dispatch(deleteTodo(id));
  const onToggleStatusTodo = (id) => dispatch(toggleStatusTodo(id));

  return (
    <div className='app'>
      <div className='work'>
        <h2 className='title-work'>Working on it 🔥</h2>
        <div>
          <ul>
            {todos.map((todo) => {
              if (!todo.isDone) {
                return (
                  <li className='list-row' key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.task}</div>
                    <div className='buttons'>
                      <button
                        className='button-done'
                        onClick={() => onToggleStatusTodo(todo.id)}
                      >
                        {todo.isDone ? 'not done' : 'done'}
                      </button>
                      <button
                        className='button-delete'
                        onClick={() => onDeleteTodo(todo.id)}
                      >
                        delete
                      </button>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div className='done'>
        <h2 className='title-work'>Done 🎉</h2>
        <div>
          <ul>
            {todos.map((todo) => {
              if (todo.isDone) {
                return (
                  <li className='list-row' key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.task}</div>
                    <div className='buttons'>
                      <button
                        className='button-notdone'
                        onClick={() => onToggleStatusTodo(todo.id)}
                      >
                        {todo.isDone ? 'not done' : 'done'}
                      </button>
                      <button
                        className='button-delete'
                        onClick={() => onDeleteTodo(todo.id)}
                      >
                        delete
                      </button>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
