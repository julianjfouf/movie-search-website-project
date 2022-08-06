import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <img src={MyLogo} alt="" className="login--img" />
      <Button variant="contained" onClick={signIn}>
        Log In
      </Button>
    </div>
  );
};

export default Login;
