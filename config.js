import firebase from 'firebase';
require("@firebase/firestore");

   var firebaseConfig = {
    apiKey: "AIzaSyCQpW_x63ULKHpCEU0E3siKTBSDzFhXZwo",
    authDomain: "barter-system-7996e.firebaseapp.com",
    projectId: "barter-system-7996e",
    storageBucket: "barter-system-7996e.appspot.com",
    messagingSenderId: "342602138911",
    appId: "1:342602138911:web:7e918aad2a3267a3325c2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();