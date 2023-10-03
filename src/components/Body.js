import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Signup from "./Signup";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { addUser, removeUser } from "../actions/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ]);

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName}))
      } else {
        dispatch(removeUser());
      }
    });
  },[])

  return <RouterProvider router={router} />;
};


export default Body;
