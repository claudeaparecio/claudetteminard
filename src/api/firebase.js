// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8p7qxvRDI7bc43L4sJQDzItpXLNqyHSI",
  authDomain: "claudetteminard.firebaseapp.com",
  projectId: "claudetteminard",
  storageBucket: "claudetteminard.appspot.com",
  messagingSenderId: "394280940718",
  appId: "1:394280940718:web:15b91f857f5cef4fdee93f"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();