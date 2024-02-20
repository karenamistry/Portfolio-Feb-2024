// ProtectedContent.js
import React, { useState } from "react";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

const ProtectedContent = ({ children }) => {
  const { isAuthenticated, authenticate } = useAuth();
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (authenticate(password)) {
      // Password is correct, isAuthenticated will be true
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col space-y-4 items-center  h-full ">
        <h2 className="subheader">
          Case studies contain info protected by NDAs. Please enter password to
          proceed.
        </h2>
        <form className="flex space-x-4" onSubmit={handleSubmit}>
          <input
            className="flex space-x-4 subheader px-6 py-3 border"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button
            className="subheader px-6 py-3 bg-black text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedContent;
