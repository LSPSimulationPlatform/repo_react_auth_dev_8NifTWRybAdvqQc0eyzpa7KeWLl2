// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsL-V-lrGW8KjnzuY7LvVK-Dm4qhckuHc",
  authDomain: "test-project-6c6f0.firebaseapp.com",
  projectId: "test-project-6c6f0",
  storageBucket: "test-project-6c6f0.firebasestorage.app",
  messagingSenderId: "596901766169",
  appId: "1:596901766169:web:bb33da62f2c78ae5597688",
  measurementId: "G-VEQDD5NEKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);