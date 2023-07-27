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
`;
