
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC5nCKAjvSiPxeMdVSjMdslgCnpHisVUWc",
  authDomain: "nse-demo.firebaseapp.com",
  projectId: "nse-demo",
  storageBucket: "nse-demo.appspot.com",
  messagingSenderId: "496696285285",
  appId: "1:496696285285:web:791adb22e86435bd0d0e8c",
  measurementId: "G-0R6ZTM6M6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);