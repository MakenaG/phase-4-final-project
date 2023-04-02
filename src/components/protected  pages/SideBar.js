import React from "react";
import { Link} from "react-router-dom";
import './sidebar.css'
function SideBar(){
    return(
        <div>
              {/* <div className="offcanvas offcanvas-start bg-light" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarLabel">Sidebar</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <Link to="/profile" className="link-dark rounded">Home</Link>
          </li>
          <li className="mb-1">
            <Link to="/uservideos" className="link-dark rounded">Videos</Link>
          </li>
          <li className="mb-1">
            <Link to="/favevides" className="link-dark rounded">Favorites</Link>
          </li>
          <li className="mb-1">
            <Link to="/usercomments" className="link-dark rounded">Comments</Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          </ul>
        </div>
      </div>
    </div> */}
          <div className="sidebar">
      <ul className="side-ul">
        <Link to="/profile">
            <li className="side"> PROFILE</li>
        </Link>
        <Link to="/uservideos">
        <li className="side">VIDEOS</li>
        </Link>
        <Link to="/favevides">
        <li className="side">FAVORITES</li>
        </Link>
        <Link to="/usercomments">
        <li className="side">COMMENTS </li>
        </Link>
      </ul>
    </div>
        </div>
    )
}

export default SideBar