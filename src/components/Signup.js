import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>

      <form className="absolute bg-black rounded-md bg-opacity-80 p-12 w-3/12 mx-auto my-36 right-0 left-0">
        <h1 className="text-white font-semibold text-3xl">Sign Up</h1>
        <div className="my-5">
         <input
            type="text"
            placeholder="Name"
            className="w-full my-2 py-2 px-4 bg-gray-700 text-white rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="w-full my-2 py-2 px-4 bg-gray-700 text-white rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full my-2 py-2 px-4 bg-gray-700 text-white rounded-md outline-none"
          />
        </div>
        <div className="my-10">
          <button className="button bg-red-600 w-full text-white text-lg px-4 py-1 rounded-md">
            Sing Up
          </button>
        </div>

        <div>
          <h4 className="text-gray-400 text-md">Already user? <Link to="/" className="text-gray-100 text-md"> Sign in now</Link>. </h4>
        </div>
      </form>
    </div>
  );
};

export default Signup;
