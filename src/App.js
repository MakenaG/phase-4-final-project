import UserVideos from './components/protected  pages/UserVideos';
import UserComments from './components/protected  pages/UserComments';
 import UploadVideo from './components/protected  pages/UploadVideo';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Videos from './components/Videos';
import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <LandingPage/> */}
      <UploadVideo />
      <UserVideos/>
      <UserComments/>
    </div>
  );
}

export default App;
