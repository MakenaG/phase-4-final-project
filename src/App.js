import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/protected  pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>

    </div>
  );
}

export default App;
