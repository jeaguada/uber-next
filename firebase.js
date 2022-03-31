// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDU14kSLEpME35e4hcxJHaX39qvqvUTM0",
  authDomain: "uber-next-f4048.firebaseapp.com",
  projectId: "uber-next-f4048",
  storageBucket: "uber-next-f4048.appspot.com",
  messagingSenderId: "442678235681",
  appId: "1:442678235681:web:714ab508f119c32d680960",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
