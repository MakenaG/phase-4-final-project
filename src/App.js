import UploadVideo from './components/protected  pages/UploadVideo';
import UserVideos from './components/protected  pages/UserVideos';
import UserComments from './components/protected  pages/UserComments';
import './App.css';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <UploadVideo />
      <UserVideos/>
      <UserComments/>
    </div>
  );
}

export default App;
