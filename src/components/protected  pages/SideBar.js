import React from "react";
import { Link} from "react-router-dom";
import './sidebar.css'
function SideBar(){
    return(
        <div>
          <div className="sidebar">
      <ul className="side-ul">
        <Link to="/profile">
            <li className="side"> PROFILE</li>
        </Link>
        <Link to="/uservideos">
        <li className="side">VIDEOS</li>
        </Link>
        <Link to="/favorites">
        <li className="side">FAVORITES</li>
        </Link>
        {/* <Link to="/usercomments">
        <li className="side">COMMENTS </li>
        </Link> */}
      </ul>
    </div>
        </div>
    )
}

export default SideBar