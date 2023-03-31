import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import './footer.css'
function Footer(){
    return(
       <div className="con bg-dark">
        <center>
        <br />
        <ul>
        <li className="list">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="yellow"
              size="2x"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className="list">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="yellow"
              size="3x"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className="list">
          <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="yellow"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className="list">
          <a href="https://twitter.com/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              color=" yellow"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
        
        <h3 className="text-bg-dark">Contact Us</h3>
        <p className="text-bg-dark">Telephone: +254726550011</p>
        <p className="text-bg-dark">Telephone: +254713498594</p>
        <p className="text-bg-dark">Email: KenyaFlix@gmail.com</p>

        </center>
      </div>
    )
} 

export default Footer