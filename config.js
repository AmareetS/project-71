import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyAtttQGh-Moj0lvzPtp_umNBtevIKG_ju4",
    authDomain: "newsletter-project-71.firebaseapp.com",
    databaseURL: "https://newsletter-project-71-default-rtdb.firebaseio.com",
    projectId: "newsletter-project-71",
    storageBucket: "newsletter-project-71.appspot.com",
    messagingSenderId: "989587863949",
    appId: "1:989587863949:web:9323c422ef6a01d97f25c4"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()