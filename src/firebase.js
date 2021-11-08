 import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqOE-9Skq3gUTqZ5PtY9R7EUiFyIANMj0",
    authDomain: "todo-app-react-2bec9.firebaseapp.com",
    projectId: "todo-app-react-2bec9",
    storageBucket: "todo-app-react-2bec9.appspot.com",
    messagingSenderId: "82217655649",
    appId: "1:82217655649:web:c7d5a3bcabcc4c915ff920",
    measurementId: "G-T9T524WZ5Z"
  });

  const db = firebaseApp.firestore();

  export default db;