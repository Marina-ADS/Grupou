import firebase from 'firebase';

const firebaseConfig =
{
    apiKey: "AIzaSyA4rTwWQELz-UVM8c0FIoYxpSKadnTUliY",
    authDomain: "grupou-78049.firebaseapp.com",
    databaseURL: "https://grupou-78049.firebaseio.com",
    projectId: "grupou-78049",
    storageBucket: "grupou-78049.appspot.com",
    messagingSenderId: "708163723018",
    appId: "1:708163723018:web:e68441abcf93ab431a64f3"
};
  
  if (!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig);
}
