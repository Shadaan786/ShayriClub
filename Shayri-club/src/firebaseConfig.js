import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAnUbH4G1nNrRO4sWXdjtRcA12VnlIP6PU",
  authDomain: "shayriclub-notify.firebaseapp.com",
  projectId: "shayriclub-notify",
  storageBucket: "shayriclub-notify.firebasestorage.app",
  messagingSenderId: "473546921229",
  appId: "1:473546921229:web:a7868360ee2ad984228c44",
  measurementId: "G-FT8QJ53F8Z"
});

export const getFirebaseMessaging=()=>{

 return isSupported()
  .then((support)=>{
    console.log(support)
    if(!support) {
      return null
    }
    else{
      return getMessaging(firebaseApp)
    }

  })


}