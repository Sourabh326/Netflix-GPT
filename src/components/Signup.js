import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidation } from "../utils/checkValidation";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";

const Signup = () => {

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidation(email.current.value, password.current.value);
    setErrorMessage(message)

    if(message) return;

    // signup logic of firebase
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " : " + errorMessage)
      // ..
    });
  }

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          className="h-[100vh] w-[100vw]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>

      <form className="absolute bg-black rounded-md bg-opacity-90 p-12 w-9/12 md:w-6/12 lg:w-3/12 mx-auto my-36 right-0 left-0">
        <h1 className="text-white font-semibold text-3xl">Sign Up</h1>
        <div className="my-5">
         <input
            type="text"
            ref={name}
            placeholder="Name"
            className="w-full my-2 py-2 px-4 bg-gray-800 text-white rounded-md outline-none"
          />
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="w-full my-2 py-2 px-4 bg-gray-800 text-white rounded-md outline-none"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="w-full my-2 py-2 px-4 bg-gray-800 text-white rounded-md outline-none"
          />
          <p className="text-md text-red-500 my-2">{errorMessage}</p>
        </div>
        <div className="my-10">
          <button onClick={handleSubmit} className="button bg-red-600 w-full text-white text-lg px-4 py-1 rounded-md">
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
