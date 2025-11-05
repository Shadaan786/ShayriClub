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
