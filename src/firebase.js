import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkZL6GiYGUbar1W88l8dFXN_IMEDJ84uA",
  authDomain: "fir-authentication-app-cb0a2.firebaseapp.com",
  projectId: "fir-authentication-app-cb0a2",
  storageBucket: "fir-authentication-app-cb0a2.appspot.com",
  messagingSenderId: "784858926609",
  appId: "1:784858926609:web:4680530a46e76f47962bb0",
  measurementId: "G-JX1D5ELWEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;