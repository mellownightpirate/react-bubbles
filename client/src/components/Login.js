import React from "react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../auth/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) =>{
    reset();
    axiosWithAuth()
      .post("/login", data)
      .then((res)=>{
        localStorage.setItem("token", res.data.payload);
        props.history.push("/dash");
      })
      .catch((err)=> console.log("Error: ", err));
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <input type="text" name="username" ref={register} />
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" ref={register} />
        </label>
        <br />

        <input type="submit" value="Log In" />
      </form>
    </>
  );
};

export default Login;