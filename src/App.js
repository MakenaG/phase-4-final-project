
import React, {useState} from 'react';
import UserVideos from './components/protected  pages/UserVideos';
import UserComments from './components/protected  pages/UserComments';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './components/Videos';
import Navbar from './components/Navbar';
import Profile from './components/protected  pages/Profile';
import FaveVids from './components/protected  pages/FavouriteVideo'
import LandingPage from './components/LandingPage';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import { AuthProvider } from 'react-auth-kit';
import Fav from './components/protected  pages/OneFav';
import OneVid from './components/OneVid';
import OneMovie from './components/oneMovie';
import SideBar from './components/protected  pages/SideBar';
import { isUserLoggedIn } from './components/utils/auth';
import { Passwordreset } from './components/Passwordreset';
function App() {
  const location = useLocation();
  const isLoggedIn = isUserLoggedIn();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register'|| location.pathname === '/reset';

  const renderComponentWithSidebar = (Component) => {
    return (
      <>
        <div className="container-fluid bg-warning">
          <div className="row">
            <div className="col-md-2">
              <SideBar />
            </div>
            <div className="col-md-10">
              <Component />
            </div>
          </div>
        </div>
      </>
    );
  };
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
          <Route path="/favorites/:id" element={renderComponentWithSidebar(Fav)} />
          <Route exact path="/favorites" element={renderComponentWithSidebar(FaveVids)} />
          <Route path="/usercomments" element={renderComponentWithSidebar(UserComments)} />
          <Route path="/profile" element={renderComponentWithSidebar(Profile)} />
          <Route path="/uservideos" element={renderComponentWithSidebar(UserVideos)} />
        </Routes>
        {isLoginPage?( null):(<Footer/>)}
      </AuthProvider>
    </div>
  );
}

export default App;