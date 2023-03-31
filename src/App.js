
import React, {useState} from 'react';
import UploadVideo from './components/protected  pages/UploadVideo';
import UserVideos from './components/protected  pages/UserVideos';
//import UserComments from './components/protected  pages/UserComments';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './components/Videos';
import Navbar from './components/Navbar';
import Profile from './components/protected  pages/Profile';
import FaveVids from './components/protected  pages/FavouriteVideo';
import LandingPage from './components/LandingPage';
import { Login } from './components/Login';
import { Register } from './components/Register';
import {BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className="App"> 
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
      <BrowserRouter>
        <Navbar/>
        <Videos/>
        <FaveVids/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/uservideos' element={<UserVideos/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
