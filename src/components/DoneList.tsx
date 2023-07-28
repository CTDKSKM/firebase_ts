import React from "react";
import { styled } from "styled-components";
import { StyledP } from "./TodoList";
type Props = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};
const DoneList = ({ todos, toggleTodo, deleteTodo }: Props) => {
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
