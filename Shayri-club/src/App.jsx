import { useState } from 'react'
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


function App() {


  return (
    <>
    <BrowserRouter>
    
    <Routes> 

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
      <Route path='/try' element= {<Auth/>}/>
      <Route path='/try2' element= {<AuthPage/>}/>

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
