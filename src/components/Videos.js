import React from "react";
import {useState, useEffect} from "react"
import './Extra.css'


function Videos(){
    // will be used to get the video we are going to be viewing ;) 
    const [video, setVideo] = useState([])


    return(
        <div>
            <div className="bg-warning" id="VideoContainer">
                <div class="card mb-6" id="VideoDisplay">
                    <video src="video.mp4" controls></video>
                    <div class="card-body">
                        <h5 class="card-title">Video Title</h5>
                        <p class="card-text">Quick Description of the video we've gotten</p>
                        <p className="card-text">Length of the video</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Videos