import React from "react";
import '../Extra.css'


function FaveVids(){
    return (
        <div className="bg-warning" id="VideoContainer">
            <div className="container">
                <h1>MyFavourites</h1>
            </div>
            <br/><br/>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* where the movie cards will go :) */}
                        <div className="col">
                            <div className="card mb-3">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Movie title</h5>
                                    <p className="card-text">Movie Description :V</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default FaveVids