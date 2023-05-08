import { v4 as uuidv4 } from 'uuid';

//action value
const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const TOGGLESTATUS_TODO = 'todo/TOGGLESTATUS_TODO';
const GET_TODOBYID = 'todo/GET_TODOBYID';

//action creator: action value를 return하는 함수
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLESTATUS_TODO,
    payload,
  };
};
export const getTodoById = (payload) => {
  return {
    type: GET_TODOBYID,
    payload,
  };
};
// initialState
const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: 'react',
      task: 'finish toy project',
      isDone: false,
    },
  ],
  todo: {
    id: uuidv4(),
    title: '',
    task: '',
    isDone: false,
  },
};

// reducer(input로 두가지 받음! state과 action)
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case TOGGLESTATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return { ...todo };
          }
        }),
      };
    case GET_TODOBYID:
      return {
        ...state,
        todo: state.todos.find((todo) => todo.id === action.payload),
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todo;
