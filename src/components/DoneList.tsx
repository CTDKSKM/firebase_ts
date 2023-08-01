import React from "react";
import { styled } from "styled-components";
import { StyledP } from "./TodoList";
import { useSelector } from "react-redux";
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
const DoneList = ({ toggleTodo, deleteTodo }: Props) => {
  const todos = useSelector((state: RootState) => state.todos).filter(
    (todo) => todo.isDone
  );
  return (
    <>
      <StyledP>Done..</StyledP>
      <div className="done-container">
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
      </div>
    </>
  );
};

export default DoneList;

const StyledTodoCard = styled.div`
  padding: 10px;
  border: 1px solid gray;
  aspect-ratio: 10/7;
`;
