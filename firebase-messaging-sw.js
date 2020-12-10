// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBxhkOKc_tWaeeUSePIwitc2Tm-aqrLTww",
//     authDomain: "chat-app-7da13.firebaseapp.com",
//     databaseURL: "https://chat-app-7da13.firebaseio.com",
//     projectId: "chat-app-7da13",
//     messagingSenderId: "454878238535",
//     appId: "1:454878238535:web:6fb06475d86f38e4"
// };
var firebaseConfig = {
    apiKey: "AIzaSyDTo8Hfuz_MzJkRR3CZUkPWB-2k-vewwCg",
    authDomain: "chat-app-b90ca.firebaseapp.com",
    projectId: "chat-app-b90ca",
    storageBucket: "chat-app-b90ca.appspot.com",
    messagingSenderId: "860662564178",
    appId: "1:860662564178:web:8914fed9636f9a8e35e68b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



