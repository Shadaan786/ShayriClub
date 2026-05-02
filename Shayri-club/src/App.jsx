import { useState, useEffect } from 'react'
import './App.css'
import Bg from './Bg'
import IqbalInfo from './pages/IqbalInfo';
import JaunInfo from './pages/JaunInfo';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Iqbalsher from './pages/Iqbalsher';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Kalam from './pages/kalam';
import UrKalam from './pages/UrKalam';
import Streak from './pages/streak';
// import { ContextProvider } from '../src/ContextProvider';
// import { ContextProvider } from './Apis/SignupApi';
import UserProfile from './pages/UserProfile';
import { ContextProvider } from './ContextProvider';
import GlobalChat from './pages/globalChat';
import Search from './pages/Search';
import { Community } from './pages/Communities';
import DispCommunities from './pages/DispCommunities';
import CommunityNav from './pages/CommunityNav';
import CommunityProfile from './pages/CommunityProfile';
import { CommunityChat } from './pages/CommunityChat';
import Auth from './pages/Auth';
import AuthPage from './pages/AuthPage';
import { Social } from './pages/Social';
import { Card } from './pages/components/Card';
import LightRays from './pages/Bg2';
import { KalamComment } from './pages/KalamComment';
import { ProfileCard } from './pages/components/ProfileCard';
import {CreatingAlbums } from './pages/CreatingAlbums';
import {DispAlbums} from './pages/DispAlbums'
import { AlbumCard } from './pages/components/AlbumsCard';
import { Album } from './pages/Album';
import { Trying } from './pages/Trying';
import { MicTesting } from './pages/Mic';
import {KalamPlayer} from './pages/components/kalamPlayer'
import AlbumsLive from './pages/AlbumsLive';
import { firebaseApp } from "./firebaseConfig";
import { getMessaging, onMessage } from "firebase/messaging";
import { getFCMToken } from './services/push notifications/getToken';
import logo from './image.png'
import { LogOut } from 'lucide-react';


function App() {

  useEffect(()=>{

    const messaging = getMessaging(firebaseApp);
onMessage(messaging, (data) => {
  console.log('Message received. ', data);

  
  const notificationTitle =
    data.notification?.title || "Foreground Message Title";

  const notificationOptions = {
    body: data.notification?.body || "foreground Message body.",
    icon: logo,
  };

  new Notification(notificationTitle, notificationOptions);


  // ...
});





  }, [])
  



  return (
    <>
    <BrowserRouter>
    
    <Routes> 
      {
        useEffect(()=>{
          getFCMToken()
        }, [])
      }

      <Route path = '/' element = {<Bg/>}/>
      <Route path = 'IqbalInfo' element = {<IqbalInfo/>}/>
      <Route path = 'JaunInfo' element = {<JaunInfo/>}/>
      <Route path = 'IqbalInfo/Iqbalsher' element = {<Iqbalsher/>}/>
      <Route path = 'Signup' element = {<Signup/>}/>
      <Route path = 'Signup/Login' element = {<Login/>}/>
      
      <Route path = '/Kalam' element = {<Kalam/>}/>
      <Route path = 'UrKalam' element = {<UrKalam/>}/>
      <Route path = '/Profile' element = {<UserProfile/>}/>
      <Route path = '/Streak' element = {<Streak/>}/>
      <Route path = '/Chat' element = {<GlobalChat/>}/>
      <Route path = '/Search' element = {<Search/>}/>
      <Route path = '/Communities' element = {<Community/>}/>
      <Route path = '/DispCommunities' element = {<DispCommunities/>}/>
      <Route path = '/CommunityNav' element = {<CommunityNav/>}/>
      <Route path = '/CommunityProfile' element = {<CommunityProfile/>}/>
      <Route path='/CommunityChat' element= {<CommunityChat/>}/>
      <Route path='/Try' element= {<Auth/>}/>
      <Route path='/Try2' element= {<AuthPage/>}/>
      <Route path='/Social' element= {<Social/>}/>
      <Route path='/Card' element= {<Card/>}/>
      <Route path='/Bg2' element= {<LightRays/>}/>
      <Route path='/Comment' element= {<KalamComment/>}/>
      <Route path='/ProfileCard' element= {<ProfileCard/>}/>
      <Route path='/CreatingAlbums' element= {<CreatingAlbums/>}/>
      <Route path='/DispAlbums' element= {<DispAlbums/>}/>
      <Route path='/AlbumCard' element= {<AlbumCard/>}/>
      <Route path='/Album' element= {<Album/>}/>
      <Route path='/trying' element= {<Trying/>}/>
      <Route path='/mic' element= {<MicTesting/>}/>
      <Route path='/kplayer' element= {<KalamPlayer/>}/>
      <Route path='/albumsLive' element= {<AlbumsLive/>}/>

      {/* <ContextProvider>
        <Kalam/>
      </ContextProvider> */}
    
    </Routes>
    
    </BrowserRouter>
    
    {/* <div ><Bg/></div> */}
    </>
  )
}

export default App;
