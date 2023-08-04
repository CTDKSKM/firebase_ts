import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";

type Props = {};

const Header = (props: Props) => {
  const testSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        "test@test.com",
        "111111"
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    }
  };
  const testLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        "test@test.com",
        "111111"
      );
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };
  const testLogout = async () => {
    await signOut(auth);
  };
  return (
    <StyledDiv>
      TodoList Maker
      <button
        onClick={() => {
          testSignUp();
        }}
      >
        회원가입
      </button>
      <button
        onClick={() => {
          testLogin();
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          testLogout();
        }}
      >
        로그아웃
      </button>
    </StyledDiv>
  );
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
