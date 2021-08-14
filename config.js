import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC2qEQ1yWJ4B2GeIKZlRLs4mvFYKxtEEK0",
    authDomain: "school-attendance-app-95d5a.firebaseapp.com",
    databaseURL: "https://school-attendance-app-95d5a-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-95d5a",
    storageBucket: "school-attendance-app-95d5a.appspot.com",
    messagingSenderId: "147613604403",
    appId: "1:147613604403:web:4d779870b3d495d0a1a146"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database ()