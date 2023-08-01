import { Todo } from "../../components/Main";

//액션 타입 선언
//뒤에 as const를 붙여줌으로써 나중에 액션 객체를 만들때 action.type의 값을 추론하는 과정에서
//action.type이 string으로 추론되지 않고 ' ' 와 같이 실제 문자열 값으로 추론 되도록 해줌
const ADD_TODO = "ADD_TODO" as const;
const DELETE_TODO = "DELETE_TODO" as const;
const TOGGLE_TODO = "TOGGLE_TODO" as const;

//액션 생성함수를 선언
export const addTodo = (payload: Todo) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload: string) => ({
  type: DELETE_TODO,
  payload,
});

export const toggleTodo = (payload: string) => ({
  type: TOGGLE_TODO,
  payload,
});

//모든 액션 객체들에 대한 타입을 준비
//ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줌
//상단부에서 액션타입을 선언 할 때 as const를 하지 않으면 이 부분이 제대로 작동하지 않음
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleTodo>;

//초기상태를 선언
const initialState: Todo[] = [
  { id: "test", title: "test", content: "test입니다", isDone: false },
];

//리듀서 작성
//리듀서에는 state와 함수의 반환값이 일치하도록 작성
//액션에서는 방금 만든 TodosAction을 타입으로 설정
const todos = (state: Todo[] = initialState, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

export default todos;
