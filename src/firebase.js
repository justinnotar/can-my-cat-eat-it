// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu0k0uVKic2XxNqmD8DjoCYt8DZ8TH3ds",
  authDomain: "can-my-cat-eat-xyz-v2.firebaseapp.com",
  projectId: "can-my-cat-eat-xyz-v2",
  storageBucket: "can-my-cat-eat-xyz-v2.appspot.com",
  messagingSenderId: "59535150342",
  appId: "1:59535150342:web:9b662c71803e052ff86287",
  measurementId: "G-52070XJXQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app