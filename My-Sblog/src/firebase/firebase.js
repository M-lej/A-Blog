import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZknO5nU4GGMT8BhxTlvgDrejBNL_pK6I",
  authDomain: "schoolprojects-de8b3.firebaseapp.com",
  projectId: "schoolprojects-de8b3",
  storageBucket: "schoolprojects-de8b3.appspot.com",
  messagingSenderId: "385904980933",
  appId: "1:385904980933:web:0d92ecc568020bf3e5d1ac",
  measurementId: "G-Y4BYZQ9R2V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
