import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/protected  pages/Profile';
import FaveVids from './components/protected  pages/FavouriteVideo';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <FaveVids/>

    </div>
  );
}

export default App;
