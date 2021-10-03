import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyBn84n3rCM-yG-nSKsnW7vkPzf09zCkLyc",
    authDomain: "my-todo-list-e9852.firebaseapp.com",
    projectId: "my-todo-list-e9852",
    storageBucket: "my-todo-list-e9852.appspot.com",
    messagingSenderId: "689613198708",
    appId: "1:689613198708:web:a6ec6df9bcb26ea01d0821",
    measurementId: "G-RCYF0JELDY"
  };
  // Initialize Firebase
const fireb = firebase.initializeApp(firebaseConfig);
export default fireb;

