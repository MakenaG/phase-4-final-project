
import React, {useState} from 'react';
import UserVideos from './components/protected  pages/UserVideos';
import UserComments from './components/protected  pages/UserComments';

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
import Footer from './components/footer';
import { AuthProvider } from 'react-auth-kit';
import OneVid from './components/OneVid';
import OneMovie from './components/oneMovie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App"> 
      <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
      <BrowserRouter>
        <Navbar 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}/>
        {/* <Videos/> */}
        {/* <FaveVids/> */}
        {/* <Profile/> */}
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/movies/:id' element={<OneMovie/>}></Route>
          <Route exact path='/videos' element={<Videos/>}></Route>
          <Route path='/videos/:id' element={<OneVid/>}></Route>
          <Route path='/login' element={<Login
           setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/favevids' element={<FaveVids/>}></Route>
          <Route path='/usercomments' element={<UserComments/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/uservideos' element={<UserVideos/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
