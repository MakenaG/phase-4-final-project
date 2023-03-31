import React, {useState} from 'react';
import UploadVideo from './components/protected  pages/UploadVideo';
import UserVideos from './components/protected  pages/UserVideos';
import UserComments from './components/protected  pages/UserComments';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { Login } from './components/Login';
import { Register } from './components/Register';


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
      
    </div>
  );
}

export default App;
