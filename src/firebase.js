import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwMEOkodCF9U1PJJ3ctaHq70egHfURx5g",
    authDomain: "guided-search.firebaseapp.com",
    databaseURL: "https://guided-search.firebaseio.com",
    projectId: "guided-search",
    storageBucket: "guided-search.appspot.com",
    messagingSenderId: "116441896160"
  };
  
  firebase.initializeApp(config);

export default firebase;  