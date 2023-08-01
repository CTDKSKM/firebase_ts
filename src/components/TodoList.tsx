import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { RootState } from "../redux/config/configStore";
import { Link } from "react-router-dom";
type Props = {
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
// type Todo = {
//   id: string;
//   title: string;
//   content: string;
//   isDone: boolean;
// };
const TodoList = ({ toggleTodo, deleteTodo }: Props) => {
  const todos = useSelector((state: RootState) => state.todos).filter(
    (todo) => !todo.isDone
  );
  return (
    <>
      <StyledP>Todo..</StyledP>
      <StyledTodoListDiv>
        {todos.map((todo, idx) => {
          return (
            <StyledTodoCard key={idx}>
              <div>{todo.title}</div>
              <div>{todo.content}</div>
              <button
                onClick={() => {
                  toggleTodo(todo.id);
                }}
              >
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                삭제
              </button>
              <Link to={`/details/${todo.id}`}>상세보기</Link>
            </StyledTodoCard>
          );
        })}
      </StyledTodoListDiv>
    </>
  );
};

export default TodoList;
export const StyledP = styled.p`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const StyledTodoListDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 28%));
  grid-gap: 3%;
  align-items: center;
  justify-content: center;
`;

const StyledTodoCard = styled.div`
  padding: 10px;
  border: 1px solid gray;
  aspect-ratio: 10/7;
`;
