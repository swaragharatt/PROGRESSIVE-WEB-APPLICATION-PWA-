// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBbZgpsBfjCBsh4rWMAq0LAjmEDd35eTK0",
  authDomain: "gearheadpush.firebaseapp.com",
  projectId: "gearheadpush",
  storageBucket: "gearheadpush.appspot.com",
  messagingSenderId: "931473448824",
  appId: "1:931473448824:web:0f109b290d3ec9236e328d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png' // Replace with your actual icon if needed
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
