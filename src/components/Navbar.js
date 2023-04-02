import React from "react";
import "./Extra.css"

function Navbar(){
    return(
        <div>
            <nav className="navbar bg-dark" >
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-bg-dark">KenyaFlix</span>
                    
                    <a className="nav-item btn btn-warning">Home</a>
                    <a className="nav-item btn btn-warning">Videos</a>
                    <a className="nav-item btn btn-warning">Login</a>
                    <a className="nav-item btn btn-warning">Profile</a>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar