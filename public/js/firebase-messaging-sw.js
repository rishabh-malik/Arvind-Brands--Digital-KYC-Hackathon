importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

var config = {
    apiKey: "AIzaSyDqTKSOn-SOQ_PMYH4icT5LfswQFwPqiUM",
    authDomain: "hackathon-4febb.firebaseapp.com",
    databaseURL: "https://hackathon-4febb.firebaseio.com",
    projectId: "hackathon-4febb",
    storageBucket: "hackathon-4febb.appspot.com",
    messagingSenderId: "22239613539"  
    };
    firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();