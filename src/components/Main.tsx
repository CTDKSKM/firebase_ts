import React from "react";
import TodoList from "./TodoList";
import { styled } from "styled-components";

type Props = {};

const Main = (props: Props) => {
  return (
    <StyledDiv>
      <div className="input-container">
        <form onSubmit={() => {}}>
          <div>
            TodoTitle:
            <input type="text" />
          </div>
          <div>
            TodoContent: <input type="text" />
          </div>
          <button>추가</button>
        </form>
      </div>
      <TodoList />
    </StyledDiv>
  );
};

export default Main;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .input-container {
    display: flex;
    flex-direction: column;
    width: 15%;
    height: 20%;
    padding: 20px;
    border: 1px solid rgba(255, 100, 0, 0.2);
    div {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }
  }
`;
