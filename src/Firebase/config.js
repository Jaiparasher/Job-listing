import app from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDy6bU9qRBAmO0kXVlX1j8bO-TZb8G6Raw",
    authDomain: "job-listing-6c1e3.firebaseapp.com",
    projectId: "job-listing-6c1e3",
    storageBucket: "job-listing-6c1e3.appspot.com",
    messagingSenderId: "110569522713",
    appId: "1:110569522713:web:5e24b7bf398e4fb7f14c88"
  };

  // Initialize Firebase
  const firebase = app.initializeApp(firebaseConfig);
  const firestore=firebase.firestore();

  export {firebase,firestore,app}