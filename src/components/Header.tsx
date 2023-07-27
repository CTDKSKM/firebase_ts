import styled from "styled-components";

type Props = {};

const Header = (props: Props) => {
  return <StyledDiv>TodoList Maker</StyledDiv>;
};

export default Header;

const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px -5px rgba(255, 100, 0, 0.3);
  margin-bottom: 30px;
`;
