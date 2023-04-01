
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
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import { AuthProvider } from 'react-auth-kit';
import OneVid from './components/OneVid';
import OneMovie from './components/oneMovie';
import { isUserLoggedIn } from './components/utils/auth';
import { Passwordreset } from './components/Passwordreset';
function App() {
  const location = useLocation();
  const isLoggedIn = isUserLoggedIn();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register'|| location.pathname === '/reset';

  return (
    <div className="App"> 
      <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
        <Navbar 
        isLoggedIn={loggedIn}
        setIsLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/movies/:id' element={<OneMovie/>}></Route>
          <Route exact path='/videos' element={<Videos/>}></Route>
          <Route path='/videos/:id' element={<OneVid/>}></Route>
          <Route path='/login' element={<Login
           setIsLoggedIn={setLoggedIn}/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/reset' element={<Passwordreset/>}></Route>
          <Route path='/favevids' element={<FaveVids/>}></Route>
          <Route path='/usercomments' element={<UserComments/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/uservideos' element={<UserVideos/>}></Route>
        </Routes>
        {isLoginPage?( null):(<Footer/>)}
      </AuthProvider>
    </div>
  );
}

export default App;
