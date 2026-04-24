import { getToken } from "firebase/messaging";
import { firebaseApp } from "@/firebaseConfig";
import { getFirebaseMessaging } from "@/firebaseConfig";
import axiosInstance from "@/Apis/axiosInstance";


const VAPID_KEY = "BNVa0f_7ucnumiZJhnxm_KB7lwihpXk4NWTDvSojAO7aP0CI6MEA_m7uBe9TKBd8fCDpMOY22j0w51kdtX0OkA4";    

export const getFCMToken =async()=>{
    const permission  = await Notification.requestPermission();

    if(permission!== 'granted'){
        console.log("Permission denied")
        return null;
    }
    const messaging = await getFirebaseMessaging();
    console.log(messaging)
    if(!messaging) return null;

    const token = await getToken(messaging,{
        vapidKey: VAPID_KEY
    });
    if(token){
        console.log("FCM token generated successfully", token)
        axiosInstance
        .post('/api/FCMtoken',{
            fcmToken: token
        }, {withCredentials: true})
        .then((response)=>{
            console.log("response.data", response.data)
        }).catch((error)=>{
            console.log("Error while fetching POST", error)
        })
        return token 
    }else{
        console.log("Sorry no token available right now")
        return null;
    }

}