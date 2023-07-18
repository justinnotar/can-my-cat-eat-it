// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "can-my-cat-eat-xyz-v2-55578.firebaseapp.com",
  databaseURL: "https://can-my-cat-eat-xyz-v2-55578-default-rtdb.firebaseio.com",
  projectId: "can-my-cat-eat-xyz-v2-55578",
  storageBucket: "can-my-cat-eat-xyz-v2-55578.appspot.com",
  messagingSenderId: "665827032973",
  appId: "1:665827032973:web:d272bca23defadbd2107c4",
  measurementId: "G-R6ELHKEFJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);