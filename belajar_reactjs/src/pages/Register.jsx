import React from "react";
import "../components/Register.css";

const Register = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:flex">
        <div className="wrapper">
          <div className="form-box register">
            <form action="">
              <div className="w-full flex font-bold text-xl justify-center">
                Create Account
                </div>

              <input
                className="input-box"
                type="text"
                placeholder="Fullname"
                required
              ></input>

              <input
                className="input-box"
                type="text"
                placeholder="Email"
                required
              ></input>

              <input
                className="input-box"
                type="text"
                placeholder="Phone Number"
                required
              ></input>

              <input
                className="input-box"
                type="text"
                placeholder="Password"
                required
              ></input>

              <input
                className="input-box"
                type="text"
                placeholder="Confirm Password"
                required
              ></input>

              <div className="w-full flex items-start my-1">
                <input type="checkbox" />
                <p className="text"> Agree with <a href="#"> Terms & Condition </a></p>
              </div>

              <button className="button" type="submit">
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
