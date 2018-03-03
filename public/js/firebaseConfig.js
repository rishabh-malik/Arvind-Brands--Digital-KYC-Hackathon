var config = {
    apiKey: "AIzaSyDqTKSOn-SOQ_PMYH4icT5LfswQFwPqiUM",
    authDomain: "hackathon-4febb.firebaseapp.com",
    databaseURL: "https://hackathon-4febb.firebaseio.com",
    projectId: "hackathon-4febb",
    storageBucket: "hackathon-4febb.appspot.com",
    messagingSenderId: "22239613539"  
    };
    firebase.initializeApp(config);

    // Retrieve Firebase Messaging object.
    const messaging = firebase.messaging();
    messaging.requestPermission()
.then(function() {
  console.log('Notification permission granted.');
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
  return messaging.getToken();
})
.then(function(){
    console.log(token);
})
.catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});

messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
    // ...
  });