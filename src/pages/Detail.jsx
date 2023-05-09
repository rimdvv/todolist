import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { getTodoById } from '../redux/modules/todos.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch, id]);

  return (
    <StContainer>
      <StDetailContainer>
        <StIdRow>
          <StBtnGoback
            onClick={() => {
              navigate('/');
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </StBtnGoback>
          <StId>ID : {todo.id}</StId>
        </StIdRow>
        <div>{todo.title}</div>
        <div>{todo.task}</div>
      </StDetailContainer>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  font-size: 20px;
  font-family: 'Poppins';
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDetailContainer = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid #58c187;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const StIdRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const StBtnGoback = styled.button`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 46px;
  background: #58c187;
  border-radius: 100px;
  border-style: none;
  color: white;
`;

const StId = styled.div`
  font-size: 15px;
  color: #58c187;
`;
