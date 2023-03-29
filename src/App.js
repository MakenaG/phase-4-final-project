import UploadVideo from './components/protected  pages/UploadVideo';
import UserVideos from './components/protected  pages/UserVideos';
import UserComments from './components/protected  pages/UserComments';

import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <UploadVideo />
      <UserVideos/>
      <UserComments/>
      
      </>
    </div>
  );
}

export default App;
