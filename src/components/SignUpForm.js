import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  return (
  <>
    <div className="flex justify-center  ">
      <form 
      // onSubmit={handleSubmit} 
      className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-1 text-center">Sign Up</h2>
        <div className="mb-2">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password_confirmation" className="block text-gray-700 font-bold mb-2">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center mt-4 justify-between">
          <Link to="/todo" type="submit" className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {isLoading ? "Loading..." : "Sign Up"}
          </Link>
        </div>
        {errors.length > 0 && (
          <div className="mt-2">
            {errors.map((err) => (
              <p key={err} className="text-red-500">{err}</p>
            ))}
          </div>
        )}
      </form>
    </div>
</>
  
  );
}

export default SignUpForm;