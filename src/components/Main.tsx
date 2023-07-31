import React from "react";
import TodoList from "./TodoList";
import { styled } from "styled-components";
import { useState } from "react";
import DoneList from "./DoneList";

type Props = {};
type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const Main = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const doneTodos = todos.filter((todo) => todo.isDone);
  const unDoneTodos = todos.filter((todo) => !todo.isDone);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const addTodo = (): void => {
    const newTodo: Todo = {
      id: `${todos.length + 1}`,
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };
  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const handleInputContent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContent(e.target.value);
  };
  const deleteTodo = (id: string): void => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const toggleTodo = (id: string): void => {
    const newTodos: Todo[] = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
  };

  return (
    <StyledDiv>
      <div className="side">
        <div className="input-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodo();
            }}
          >
            <div>
              TodoTitle:
              <input type="text" value={title} onChange={handleInputTitle} />
            </div>
            <div>
              TodoContent:
              <input
                type="text"
                value={content}
                onChange={handleInputContent}
              />
            </div>
            <button>추가</button>
          </form>
        </div>
        <TodoList
          todos={unDoneTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "760px",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <DoneList
          todos={doneTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </StyledDiv>
  );
};

export default Main;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 3%;
  .side {
    width: 760px;
    height: 20%;
    margin: 0 auto;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 1px solid rgba(255, 100, 0, 0.2);

    div {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }
  }
  .done-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 28%));
    grid-gap: 3%;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;
