import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodoById } from '../redux/modules/todos.js';

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <div>
          <div>
            <div>ID :{todo.id}</div>
            <button
              borderColor='#ddd'
              onClick={() => {
                navigate('/');
              }}
            >
              이전으로
            </button>
          </div>
          <div>{todo.title}</div>
          <div>{todo.task}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
