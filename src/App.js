
import React, {useState} from 'react';
import UserVideos from './components/protected  pages/UserVideos';
//import UserComments from './components/protected  pages/UserComments';

// import './App.css';
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


function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className="App"> 
    {/* {
      currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    } */}
      <BrowserRouter>
        <Navbar/>
        {/* <Videos/> */}
        {/* <FaveVids/> */}
        {/* <Profile/> */}
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/videos' element={<Videos/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/favevids' element={<FaveVids/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/uservideos' element={<UserVideos/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
