// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI9_qV_ZTqeVlAM61ulLm_I4aM8SNdAHk",
  authDomain: "netflix-gpt-7b674.firebaseapp.com",
  projectId: "netflix-gpt-7b674",
  storageBucket: "netflix-gpt-7b674.appspot.com",
  messagingSenderId: "384162449952",
  appId: "1:384162449952:web:718fc4304114b50ee28a45",
  measurementId: "G-EQ3R2M29V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();