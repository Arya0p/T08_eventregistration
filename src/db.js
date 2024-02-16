import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDA0JJNOXa3PyRWuh603BAWP-SYo0XcplY",
    authDomain: "t08-eventregistration.firebaseapp.com",
    projectId: "t08-eventregistration",
    storageBucket: "t08-eventregistration.appspot.com",
    messagingSenderId: "5051705944",
    appId: "1:5051705944:web:890c434a956059cbf9782d",
    measurementId: "G-C0X51NT1V8"
  };






const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

  
export {auth,provider};
export default db;