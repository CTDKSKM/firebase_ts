import { styled } from "styled-components";

type Props = {};
type Todo = {
  title: string;
  content: string;
};
const TodoList = (props: Props) => {
  const testArr: Todo[] = [
    { title: "테스트1", content: "테스트1입니다" },
    { title: "테스트2", content: "테스트2입니다" },
    { title: "테스트3", content: "테스트3입니다" },
    { title: "테스트4", content: "테스트4입니다" },
    { title: "테스트5", content: "테스트5입니다" },
  ];

  return (
    <StyledDiv>
      {testArr.map((todo, idx) => {
        return (
          <StyledTodoCard key={idx}>
            {todo.title}
            {todo.content}
          </StyledTodoCard>
        );
      })}
    </StyledDiv>
  );
};

export default TodoList;

const StyledDiv = styled.div`
  width: 80%;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 20%));
  grid-gap: 3%;
  align-items: center;
  justify-content: center;
`;

const StyledTodoCard = styled.div`
  padding: 10px;
  border: 1px solid gray;
  aspect-ratio: 10/7;
`;
