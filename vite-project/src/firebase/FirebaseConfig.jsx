// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCokYUfErzo4oj4WkW1kDhOhCUUqFqfn4A",
  authDomain: "fyrecommerce-4a302.firebaseapp.com",
  projectId: "fyrecommerce-4a302",
  storageBucket: "fyrecommerce-4a302.appspot.com",
  messagingSenderId: "332693131094",
  appId: "1:332693131094:web:e7d13975ac1b6cfdced0f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
