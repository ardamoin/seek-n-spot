import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "seek-n-spot.firebaseapp.com",
  projectId: "seek-n-spot",
  storageBucket: "seek-n-spot.appspot.com",
  messagingSenderId: import.meta.env.SENDERID,
  appId: import.meta.env.APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
