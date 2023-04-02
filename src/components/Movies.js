import React from "react";
import './Extra.css'

function Movies(){
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
                <br/>
                <br/>
                
            </div>
            <div className="bg-dark">
                <div className=" container bg-dark">
                    <div className="form-container">
                        <form className="row bg-dark">
                            <label className="form-label" htmlFor="InputComment">Post your own comment</label>
                            <input className="form-control" type="text" placeholder="comment goes here"></input>
                            <button className="btn btn-warning">Post Comment</button>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <h3 className="header text-bg-dark">Comments:</h3>
                    <br></br>
                    <div className="container" id="CommentsArea">
                        <div className="card bg-warning w-75">
                            <div className="card-header">
                                UserName
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>This is where the user's comment will go</p>
                                    <footer className="blockquote-footer">Date of posting</footer>
                                </blockquote>
                            </div>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies