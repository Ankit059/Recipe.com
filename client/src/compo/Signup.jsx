import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [userId, setUserId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async () => {
    debugger;
    try {
      const data = {
        userid: userId,
        password: password,
        confirmPass: confirmPassword,
        email: email,
        firstname: fname,
        lastname: lname,
        type: "user",
      };

      const response = await fetch(
        "http://localhost:3002/api/auth/usersignup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result);
      } else {
        alert(result);
        navigate("/login");
      }
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  return (
    <>
      <div className="contain h-screen w-screen flex justify-center items-center bg-slate-500">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="userId"
              >
                User Id
              </label>
              <input
                type="userId"
                id="userId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="userId"
              >
                First name
              </label>
              <input
                type="userId"
                id="userId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="userId"
              >
                Last name
              </label>
              <input
                type="userId"
                id="userId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              onClick={() => onSubmit()}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Signup
            </button>
          </form>
        <div className="text-xs text-center font-sans">If you already have an account please  <Link to="/login" className="text-blue-500 text-sm underline ml-1  cursor-pointer">Login</Link></div>
        </div>
      </div>
    </>
  );
};
