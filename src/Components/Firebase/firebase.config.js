// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO6_IEaY3kKyt-6CYXbMPNymtenGP1_8o",
  authDomain: "strom-scope.firebaseapp.com",
  projectId: "strom-scope",
  storageBucket: "strom-scope.appspot.com",
  messagingSenderId: "77513359560",
  appId: "1:77513359560:web:6f477d71928bce4b3de5fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;