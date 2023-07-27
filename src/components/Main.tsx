import React from "react";
import TodoList, { StyledP } from "./TodoList";
import { styled } from "styled-components";
import { useState } from "react";

type Props = {};
type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const Main = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([{ id: '1', title: "테스트1", content: "테스트1입니다", isDone: false, },
    { id: '2', title: "테스트2", content: "테스트2입니다", isDone: false, },
    { id: '3', title: "테스트3", content: "테스트3입니다", isDone: false, },
    { id: '4', title: "테스트4", content: "테스트4입니다", isDone: false, },
    { id: '5', title: "테스트5", content: "테스트5입니다", isDone: true, },])
    const doneTodos = todos.filter(todo=>todo.isDone)
    const notDoneTodos = todos.filter(todo=>!todo.isDone)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const addTodo = ():void => {
    const newTodo:Todo = {
      id: `${todos.length+1}`,
      title,
      content,
      isDone: false
    }
    setTodos([...todos, newTodo])
    setTitle('')
    setContent('')
  }
  const handleInputTitle = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setTitle(e.target.value)
  }
  const handleInputContent = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setContent(e.target.value)
  }
  const deleteTodo = (id: string):void => {
    const newTodos:Todo[] = todos.filter(todo=>todo.id!=id)
    setTodos(newTodos)
  }
  const toggleTodo = (id: string):void => {
    const newTodos:Todo[] = todos.map(todo=>todo.id==id ? {...todo, isDone: !todo.isDone} : todo)
    setTodos(newTodos)
  }
  return (
    <StyledDiv>
      <div className="side">
        <div className="input-container">
          <form onSubmit={(e) => {e.preventDefault();addTodo()}}>
            <div>
              TodoTitle:
              <input type="text" value={title} onChange={handleInputTitle}/>
            </div>
            <div>
              TodoContent: 
              <input type="text" value={content} onChange={handleInputContent}/>
            </div>
            <button>추가</button>
          </form>
        </div>
        <StyledP>Done..</StyledP>
        <div className="done-container">
          {doneTodos?.map((todo,idx)=>{
            return(
            <StyledTodoCard key={idx}>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <button onClick={()=>{toggleTodo(todo.id)}}>{todo.isDone ? '취소' : '완료'}</button>
            <button onClick={()=>{deleteTodo(todo.id)}}>삭제</button>
          </StyledTodoCard>
          )})}
        </div>
      </div>
      <div style={{display: 'flex', width: '50%', flexDirection: 'column'}}>
        <TodoList 
          todos={notDoneTodos} 
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
  width: 100%;
  justify-content: space-between;
  gap: 3%;
  .side {
    width: 760px;
    height: 20%;
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
    grid-template-columns: repeat(auto-fill, minmax(180px, 28%));
    grid-gap: 3%;
    align-items: center;
    justify-content: center;
  }
`;

const StyledTodoCard = styled.div`
  padding: 10px;
  border: 1px solid gray;
  aspect-ratio: 10/7;
`