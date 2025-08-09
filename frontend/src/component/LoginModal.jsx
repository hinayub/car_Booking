import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../App";
import axios from "axios";

const LoginModal = () => {
  const navigate = useNavigate();
  const [getEmail, setgetEmail] = useState("");
  const [getPassword, setgetPassword] = useState("");
  const { userName, setUsername, setUserId } = useContext(userContext);
  const [loginError, setLoginError] = useState("");

  const loginUser = () => {
    const formdata = {
      email: getEmail,
      password: getPassword,
    };
    axios
      .post("http://localhost:8000/api/login/", formdata)
      .then((res) => {
        console.log(`here is ${res.data["name"]}`);
        setUsername(`Hi ${res.data["name"]}`);
        console.log(res.data["id"]);
        setUserId(res.data["id"]);
        navigate("/home");
      })
      .catch((err) => {
        const msg = err.response?.data?.error;
        setLoginError(msg);
      });
  };

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              ></button>
            </div>
            <div className="p-4 md:p-5">
              <div className="space-y-4">
                <div className="text-red-400">{loginError}</div>
                <div>
                  <label
                    for="Username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={getEmail}
                    onChange={(e) => setgetEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={getPassword}
                    onChange={(e) => setgetPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={loginUser}
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                    onClick={() => navigate("/signup")}
                  >
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
