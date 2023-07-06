import "../../styles/pages/example/example2.css";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogin, setLogout } from "../../reducers/exampleSlice";

const Example2 = () => {
  const state = useSelector((state) => state.example);
  const dispatch = useDispatch();

  const usernameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  
  const handleLogin = () => {
	const usernameValue = usernameRef.current.value;
	const ageValue = ageRef.current.value;
	const emailValue = emailRef.current.value;
	dispatch(setLogin({
		username: usernameValue,
		age: ageValue,
		email: emailValue,
	}));
  };

  const handleLogout = () => {
	dispatch(setLogout());
  };

  return (
    <div>
      <h1>Example 2 (Redux Practice)</h1>
      {state.profile.login ? (
        <div>
          <div className="login-box">
            <h2>UserInfo</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required="" defaultValue={state.profile.username}/>
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="text" name="" required="" defaultValue={state.profile.age}/>
                <label>Age</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required="" defaultValue={state.profile.email}/>
                <label>Email</label>
              </div>
              <a onClick={handleLogout}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Logout
              </a>
            </form>
          </div>
        </div>
      ) : (
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" ref={usernameRef}/>
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required="" ref={ageRef}/>
              <label>Age</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" ref={emailRef}/>
              <label>Email</label>
            </div>
            <a onClick={handleLogin}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      )}
    </div>
  );
};
export default Example2;
