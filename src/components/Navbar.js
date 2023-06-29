import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './images/logo.png'
import './navbar.css'
import { removeUser, removeUserToken, getToken} from "./utils/auth";

function Navbar({isLoggedIn,setIsLoggedIn}){
  let navigate = useNavigate();
  let token = getToken()
  
  function handleLogout() {
fetch("https://backend-dc1w.onrender.com/users/logout", {
      method: "DELETE",
    }).then(() => {
      removeUser();
      removeUserToken();
      setIsLoggedIn(false);
      token = null
    })    
      // token = null
  }
  function handleLogin() {
      if(token !== null){
      setIsLoggedIn(true)
      navigate("/profile");
      }
  }
  function handleLoginProfile() {
    if (isLoggedIn === false && token === null) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  }
  console.log(isLoggedIn)
  console.log(token)
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              KenyaFlix
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videos">
                  Videos
                </Link>
              </li>
              <li className="nav-item" onClick={handleLoginProfile}>
                <Link className="nav-link" to="/profile" >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
              {!isLoggedIn?(
                <Link className="nav-link" to="/login" onClick={handleLogin}>
                  Login 
                </Link>
              ):(
                <Link className="nav-link" to="/profile" onClick={handleLogout}>
                  Log out
                </Link>
              )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
    
}

export default Navbar