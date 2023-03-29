import UploadVideo from './components/protected  pages/UploadVideo';
import UserVideos from './components/protected  pages/UserVideos';
import UserComments from './components/protected  pages/UserComments';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <UploadVideo />
      <UserVideos/>
      <UserComments/>
    </div>
  );
}

export default App;
