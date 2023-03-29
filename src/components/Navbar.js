import React from "react";


function Navbar(){
    return(
        <div>
            <nav className="navbar bg-dark" >
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-bg-dark">WatchRN</span>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar