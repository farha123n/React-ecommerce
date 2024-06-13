// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvKuD71GsO7bAXkk0swyklLU50D086IVI",
  authDomain: "reale-state-c2f0d.firebaseapp.com",
  projectId: "reale-state-c2f0d",
  storageBucket: "reale-state-c2f0d.appspot.com",
  messagingSenderId: "639725883843",
  appId: "1:639725883843:web:7279475dc23b24b1ac2d76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
export default  auth ;