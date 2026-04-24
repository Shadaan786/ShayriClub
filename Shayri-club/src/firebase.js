

const messaging = getMessaging(firebaseApp);
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});