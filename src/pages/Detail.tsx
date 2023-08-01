import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { RootState } from "../redux/config/configStore";
import { styled } from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const todo = useSelector((state: RootState) => state.todos).filter(
    (todo) => todo.id === id
  )[0];
  return (
    <StDetailDiv>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.content}
      <br />
      {`완료여부: ${todo.isDone}`}
      <br />
      <Link to={`/`}>홈으로</Link>
    </StDetailDiv>
  );
};

export default Detail;

const StDetailDiv = styled.div`
  width: 30%;
  height: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 100, 0, 0.4);
  border-radius: 7px;
  padding: 10px;
`;
