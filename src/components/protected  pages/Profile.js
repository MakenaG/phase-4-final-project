import React from "react";
import '../Extra.css'


function Profile(){
    return(
        <div className="bg-warning" id="VideoContainer">
            <br/>
            <br/>
            <div className="container">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-dark">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="..." className="img-fluid my-5"/>
                                        <h5 className="text">UserName</h5>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4"/>
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted">whereemailgoes@gmail.com</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Account id</h6>
                                                    <p className="text-muted">Where id will go</p>
                                                </div>
                                            </div>
                                            <h6>Important Data</h6>
                                            <hr className="mt-0 mb-4"/>
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <button className="btn btn-warning">Logout</button>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <div className="dropdown">
                                                        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            YourPages
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            {/* link to favourite videos, upload videos, usercomments, user videos*/}
                                                            <li><a className="dropdown-item" href="#">Favourite videos</a></li>
                                                            <li><a className="dropdown-item" href="#">Upload video</a></li>
                                                            <li><a className="dropdown-item" href="#">My comments</a></li>
                                                            <li><a className="dropdown-item" href="#">My uploads</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
    )
}

export default Profile