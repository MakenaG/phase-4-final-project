import React, { useState, useEffect } from "react";
import antman from './images/antman.jpg'
import avatar from './images/avatar.jpg'
import endgame from './images/end-game.jpg'
import './landing.css'
import { useNavigate } from "react-router-dom";


function LandingPage() {
  const [films, setFilms] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate()

  useEffect(() => {
    setLoading(true)  
    // Fetch films data and update state
    fetch("https://backend-dc1w.onrender.com/movies")
      .then((res) => {
        if(res.ok){
          res.json().then((data)=>{
            setFilms(data)
          })
        }else{
          res.json().then((err)=>setErrors([err.errors]))
        }
        setLoading(false)
      })
  },[setLoading, setFilms, setErrors])
  
  function handleMovie(film){
    navigate(`/movies/${film.id}`)
  }

  return (
    <div className="bg-warning">
    <br/> 
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={antman} className="d-block w-100 car" alt="Placeholder"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="ros">Antman and the Wasp</h5>
              <p className="ros">Watch Now</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={endgame} className="d-block w-100 car" alt="Placeholder"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="ros">Avengers End Game</h5>
              <p className="ros">Out Now</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={avatar} className="d-block w-100 car" alt="Placeholder"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="ros">Avatar</h5>
              <p className="ros">Out Now</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div className="topFilmsSection container mt-3 mh-50%">
      <center><h2>Top Films</h2></center>
      {errors.length > 0 && (
          <div className="text-danger">
          {errors.map((error, index) => (
              <p key={index}>{error}</p>
          ))}
          </div>
      )}
      { loading ? (<div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> ): (
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {films.map(film => (
          <div className="col" key={film.id}>
            <div className="card" onClick={()=>handleMovie(film)}>
              <img src={film.image_src} className="card-img-top" alt={film.title} />
            </div>
          </div>
        ))}
      </div>
       )
      }
    </div>
    </div>
    
  );
}

export default LandingPage;