import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { styled } from "styled-components";
import DoneList from "./DoneList";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTodo, deleteTodo, toggleTodo } from "../redux/modules/todos";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";

export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const Main = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus();
  }, [todos]);

  const checkValidation = (): boolean => {
    if (!title || !content) {
      if (titleRef.current && contentRef.current)
        title ? contentRef.current.focus() : titleRef.current.focus();
      return false;
    } else return true;
  };
  const addTodoHandler = (): void => {
    const check = checkValidation();
    if (!check) return;
    const newTodo: Todo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };
  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const handleInputContent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContent(e.target.value);
  };
  const deleteTodoHandler = (id: string): void => {
    dispatch(deleteTodo(id));
  };
  const toggleTodoHandler = (id: string): void => {
    dispatch(toggleTodo(id));
  };

  return (
    <StyledDiv>
      <div className="side">
        <div className="input-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodoHandler();
            }}
          >
            <div>
              TodoTitle:
              <input
                ref={titleRef}
                type="text"
                value={title}
                onChange={handleInputTitle}
              />
            </div>
            <div>
              TodoContent:
              <input
                ref={contentRef}
                type="text"
                value={content}
                onChange={handleInputContent}
              />
            </div>
            <button>추가</button>
          </form>
        </div>
        <TodoList
          toggleTodo={toggleTodoHandler}
          deleteTodo={deleteTodoHandler}
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
          toggleTodo={toggleTodoHandler}
          deleteTodo={deleteTodoHandler}
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
