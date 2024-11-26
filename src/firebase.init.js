// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA39fIxqxKTGNPBI8PEfdDidH55vwkCixc",
  authDomain: "fir-explore2.firebaseapp.com",
  projectId: "fir-explore2",
  storageBucket: "fir-explore2.firebasestorage.app",
  messagingSenderId: "397965552854",
  appId: "1:397965552854:web:c78acf42c0074fe81e6d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export  {auth}