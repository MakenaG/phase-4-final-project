import React, { useState, useEffect } from "react";

function LandingPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    // Fetch films data and update state
    fetch("https://api.example.com/films")
      .then((response) => response.json())
      .then((data) => setFilms(data));
  }, []);

  return (
    <div className="bg-warning h-100px">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Movie Site
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="topFilmsSection container mb-5 mh-50%">
      <h2>Top Films</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {films.map(film => (
          <div className="col" key={film.id}>
            <div className="card">
              <img src={film.image} className="card-img-top" alt={film.title} />
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">{film.description}</p>
                <button className="btn btn-primary">Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <br/> 
    <br/> 
    <div className="container mb-5">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://pixabay.com/illustrations/photo-manipulation-alien-foreign-1825450/" className="d-block w-100" alt="Placeholder"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Placeholder"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Placeholder"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
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

    <div className="generalFilms bg-dark">
      <h2 className="text-light">General Films</h2>
      

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card bg-warning w-20">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactInfo bg-dark">
        <br />
        <br />
        <h3 className="text-bg-dark">Contact Us</h3>
        <p className="text-bg-dark">Telephone: +254726550011</p>
        <p className="text-bg-dark">Telephone: +254713498594</p>
        <p className="text-bg-dark">Email: watchrn@gmail.com</p>
      </div>
    </div>
    
  );
}

export default LandingPage;