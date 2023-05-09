import '../../../App.css';
import '@fontsource/poppins';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../../../redux/modules/todos.js';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function List() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => dispatch(deleteTodo(id));
  const onToggleStatusTodo = (id) => dispatch(toggleStatusTodo(id));

  return (
    <StListContainer>
      <StWorkContainer>
        <StTitle>Working on it 🔥</StTitle>
        <ul>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <StListRow key={todo.id}>
                  <Link to={`/${todo.id}`} style={{ textDecoration: 'none' }}>
                    <div>🔍</div>
                  </Link>
                  <StListRowItem>{todo.title}</StListRowItem>
                  <StListRowItem>{todo.task}</StListRowItem>
                  <StButtonGroup>
                    <StButtonDone onClick={() => onToggleStatusTodo(todo.id)}>
                      done
                    </StButtonDone>
                    <StButtonDelete onClick={() => onDeleteTodo(todo.id)}>
                      delete
                    </StButtonDelete>
                  </StButtonGroup>
                </StListRow>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </StWorkContainer>
      <StWorkContainer>
        <StTitle>Done 🎉</StTitle>
        <ul>
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <StListRow key={todo.id}>
                  <Link to={`/${todo.id}`} style={{ textDecoration: 'none' }}>
                    <div>🔍</div>
                  </Link>
                  <StListRowItem>{todo.title}</StListRowItem>
                  <StListRowItem>{todo.task}</StListRowItem>
                  <StButtonGroup>
                    <StButtonNotDone
                      onClick={() => onToggleStatusTodo(todo.id)}
                    >
                      not done
                    </StButtonNotDone>
                    <StButtonDelete onClick={() => onDeleteTodo(todo.id)}>
                      delete
                    </StButtonDelete>
                  </StButtonGroup>
                </StListRow>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </StWorkContainer>
    </StListContainer>
  );
}

const StListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StListRow = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  gap: 40px;
  width: 1007px;
  height: 46px;
  margin-bottom: 4px;
`;

const StListRowItem = styled.div`
  width: 300px;
  text-align: left;
  margin-left: 16px;
`;

const StWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StTitle = styled.h2`
  color: #353535;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const StButtonDone = styled.button`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  width: 111px;
  height: 46px;
  background: #58c187;
  border-radius: 20px;
  border-style: none;
  color: white;
`;

const StButtonNotDone = styled.button`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  width: 111px;
  height: 46px;
  background: #e96a62;
  border-radius: 20px;
  border-style: none;
  color: white;
`;

const StButton = styled.button`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  width: 111px;
  height: 46px;
  background: #e96a62;
  border-radius: 20px;
  border-style: none;
  color: white;
`;

const StButtonDelete = styled.button`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  width: 111px;
  height: 46px;
  background: #bcbebd;
  border-radius: 20px;
  border-style: none;
  color: white;
`;
