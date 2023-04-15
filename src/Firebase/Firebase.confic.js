// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQDo-_HylpcjDIp0KVBpIKwzFmRnIH32w",
  authDomain: "combo-practice.firebaseapp.com",
  projectId: "combo-practice",
  storageBucket: "combo-practice.appspot.com",
  messagingSenderId: "426140479274",
  appId: "1:426140479274:web:48a4e3edca5139e1333853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;