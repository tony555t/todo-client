import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import TodoList from "../pages/TodoList";
import NewTodo from "../pages/NewTodo";
import EditTodoModal from "./EditTodoModal";

function App() {
  const [user, setUser] = useState(null);

  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main> 
        <Routes>
          <Route path="/new"  element={<NewTodo user={user} />}/>
          {/* <Route path="/edit"  element={<EditTodoModal user={user} />}/> */}
          <Route path="/todo" element={<TodoList />}/>
          <Route path="/" element = {<Login onLogin={setUser} />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;