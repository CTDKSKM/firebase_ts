
import { styled } from "styled-components";
type Props = {
  todos:Todo[];
  toggleTodo: (id:string) => void;
  deleteTodo: (id:string) => void;
};
type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};
const TodoList = ({todos, toggleTodo, deleteTodo}: Props) => {

  return (<><StyledP>Todo..</StyledP><StyledTodoListDiv>
      {todos.map((todo, idx) => {
        return (
          <StyledTodoCard key={idx}>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <button onClick={()=>{toggleTodo(todo.id)}}>{todo.isDone ? '취소' : '완료'}</button>
            <button onClick={()=>{deleteTodo(todo.id)}}>삭제</button>
          </StyledTodoCard>
        );
      })}
    </StyledTodoListDiv></>
    
  );
};

export default TodoList;
export const StyledP = styled.p`
padding: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`
const StyledTodoListDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 28%));
  grid-gap: 3%;
  align-items: center;
  justify-content: center;
`;

const StyledTodoCard = styled.div`
  padding: 10px;
  border: 1px solid gray;
  aspect-ratio: 10/7;
`;
