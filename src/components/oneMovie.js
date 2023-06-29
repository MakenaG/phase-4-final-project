import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Reviews from "./Reviews";
import { getUser,getToken } from "./utils/auth";

function OneMovie(){
    const { id } = useParams();
    const [movie,setMovie] = useState([])
    const [errors,setErrors] = useState([])
    const [isFavorite,setIsFavorite] = useState(false);
    const userId = getUser()
    const token = getToken()

    useEffect(()=>{
        fetch(`https://backend-dc1w.onrender.com/movies/${id}`)
        .then(res =>{
          if(res.ok){
            res.json().then((data)=>{
              setMovie(data)
              
            })
          }else{
            res.json().then((err)=>setErrors([err.errors]))
          }
        })
    },[id])

    const handleAddFavorite = () => {
        const requestBody = {
            user_id: userId, // replace with actual user id
            movie_id: movie.id
        };
    
        fetch('https://backend-dc1w.onrender.com/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
        })
        .then(res => {
            if (res.ok) {
                setIsFavorite(true);
            } else {
                res.json().then((err) => setErrors([err.errors]));
            }
        });
    };
    console.log(errors)
    return(
        <div id="vids-con">
          <Container fluid className="my-4">
        {errors.length > 0 && (
          <div className="text-danger">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <Row>
          <Col lg={4} md={12}>
            <img
              src={movie.image_src}
              alt={movie.title}
              className="img-fluid w-100 h-300 img"
            />
          </Col>
          <Col lg={8} md={12}>
            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold" style={{ fontSize: "2rem" }}>
                Title:
              </Col>
              <Col lg={10} md={10} style={{ fontSize: "2rem" }}>
                {movie.title}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Description:
              </Col>
              <Col lg={10} md={10}>
                {movie.description}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Release Date:
              </Col>
              <Col lg={10} md={10}>
                {movie.release_date}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Runtime:
              </Col>
              <Col lg={10} md={10}>
                {movie.runtime}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Directors:
              </Col>
              <Col lg={10} md={10}>
                {movie.director}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Cast:
              </Col>
              <Col lg={10} md={10}>
                {movie.cast}
              </Col>
            </Row>
          </Col>
            </Row>
            <div style={{marginTop: "50px"}}>
              <center><h3>Trailer</h3></center>
            <Row>
                <Col lg={8} md={12} className="mx-auto text-center">
            <div className="ratio ratio-16x9">
              <iframe
                src={movie.video}
                title={movie.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {isFavorite ? (
            <p>This movie is already in your favorites list!</p>
            ) : (
            <Button variant="outline-dark" onClick={handleAddFavorite}>
                <FontAwesomeIcon icon={faHeart} /> {movie.likes}
            </Button>
            )}
           <Reviews
            movieId={movie.id}/>
          </Col>
        </Row>
        </div>
      </Container>
      </div>
    )
}

export default OneMovie