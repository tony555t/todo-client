import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
 
  return (
    <header className="flex justify-center items-center p-4 bg-slate-">
      <h1 className="font-bold text-3xl text-pink-700 m-0 leading-1">
        <Link to="/">Task Train</Link>
      </h1>
      <nav className="flex gap-4 absolute right-8">
        <Link to="/new" className="bg-yellow-200 py-3 px-4 font-bold  rounded-md">New Task</Link>
        <Link to="/" className="bg-yellow-200 py-3 px-4 font-bold  rounded-md" onClick={handleLogoutClick}>
          Logout
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
