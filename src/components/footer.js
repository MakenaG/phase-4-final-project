import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import './footer.css'
function Footer(){
    return(
       <div className="con bg-warning">
        <br/>
        <center>
        <ul className="mt-5">
        <li className="list">
          <a
            href="https://www.linkedin.com/"
            // target="_blank"
            // rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              size="2x"
              id="anchr"
            />
          </a>
        </li>
        <li className="list">
          <a
            href="https://github.com/"
            // target="_blank"
            // rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              size="2x"
              id="anchr"
            />
          </a>
        </li>
        <li className="list">
          <a
            href="https://www.instagram.com/"
            // rel="noreferrer"
            // target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="white"
              id="anchr"
            />
          </a>
        </li>
        <li className="list">
          <a href="https://twitter.com/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              color=" white"
              id="anchr"
            />
          </a>
        </li>
      </ul>
        
        <h3 className="text">Contact Us</h3>
        <p className="text">Telephone: +254726550011</p>
        <p className="text">Telephone: +254713498594</p>
        <p className="text">Email: KenyaFlix@gmail.com</p>

        </center>
      </div>
    )
} 

export default Footer