import UserVideos from './components/protected  pages/UserVideos'
// import UserComments from './components/protected  pages/UserComments';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './components/Videos';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Videos/>
        <UserVideos/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/videos' element={<Videos/>}></Route>
          <Route path='/uservideos' element={<UserVideos/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
