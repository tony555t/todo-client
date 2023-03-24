import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";


const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="max-w-500 mx-auto my-0 px-16">
      <h1 className="flex justify-center text-pink-600 font-bold text-3xl  my-3">
        Task Train
      </h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <hr className="border-none border-b-1 border-gray-900 my-1" />
          <p className="my-4 flex justify-center">
             Don't have an account? &nbsp;
            <button
              className=" text-pink-600 font-bold px-4  rounded"
              onClick={() => setShowLogin(false)}
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <hr className="border-none border-b-1 flex justify-center border-gray-900 my-1" />
          <p className="my-4 flex justify-center">
             Already have an account? 
            <button
              className=" text-pink-600 px-4 font-bold rounded"
              onClick={() => setShowLogin(true)}
            >
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;