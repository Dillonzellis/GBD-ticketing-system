import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFMABVNodECWWSO0gPwP2NxIsGXfywuYo",
  authDomain: "gbd-ticket-system.firebaseapp.com",
  projectId: "gbd-ticket-system",
  storageBucket: "gbd-ticket-system.appspot.com",
  messagingSenderId: "628102883291",
  appId: "1:628102883291:web:fa788dc263efc01b8529fe",
  measurementId: "G-NK876H2J6X",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
