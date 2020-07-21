import React from "react";
import "./Login.css";

const Login = () => {
  
    return (
        <>
        <h1>Login:</h1>
        <label for="email">Email:</label>
        <input id="email" placeholder="email@somewhere.com"></input>
        <label for="password">Password:</label>
        <input id="password" placeholder="secret123"></input>

        <h1>Sign Up:</h1>
        <label for="signup-email">Email:</label>
        <input id="signup-email" placeholder="email@somewhere.com"></input>
        <label for="signup-password">Password:</label>
        <input id="signup-password" placeholder="secret123"></input>
        </>
    );
  
}

export default Login;