import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getUser,getToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Fav(){
    const { id } = useParams();
    const [fav,setFav] = useState([])
    const [errors,setErrors] = useState([])
    const userId = getUser()
    const token = getToken()
    let navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://backend-dc1w.onrender.com/favorites/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res =>{
          if(res.ok){
            res.json().then((data)=>{
              setFav(data.movie)
              
            })
          }else{
            res.json().then((err)=>setErrors([err.errors]))
          }
        })
    },[id,token])
   console.log(fav)
    const handleDeleteFavorite = () => {
        fetch(`https://backend-dc1w.onrender.com/favorites/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            // body: JSON.stringify(requestBody)
        })
        .then(res => {
            if (res.ok) {
              setFav(prevFavorites => {
                if (Array.isArray(prevFavorites)) {
                    return prevFavorites.filter(favorite => favorite.id !== id);
                } else {
                    return [];
                }
            });    
            } else {
                res.json().then((err) => setErrors([err.errors]));
            }
            navigate('/favorites')
        });
    };
    console.log(fav.id)
    return(
        <div><Container fluid className="my-4">
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
              src={fav.image_src}
              alt={fav.title}
              className="img-fluid w-100 h-300 img"
            />
          </Col>
          <Col lg={8} md={12}>
            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold" style={{ fontSize: "2rem" }}>
                Title:
              </Col>
              <Col lg={10} md={10} style={{ fontSize: "2rem" }}>
                {fav.title}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Description:
              </Col>
              <Col lg={10} md={10}>
                {fav.description}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Release Date:
              </Col>
              <Col lg={10} md={10}>
                {fav.release_date}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Runtime:
              </Col>
              <Col lg={10} md={10}>
                {fav.runtime}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Directors:
              </Col>
              <Col lg={10} md={10}>
                {fav.director}
              </Col>
            </Row>

            <Row className="my-2">
              <Col lg={2} md={2} className="fw-bold">
                Cast:
              </Col>
              <Col lg={10} md={10}>
                {fav.cast}
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
                src={fav.video}
                title={fav.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <Button variant="outline-dark" onClick={handleDeleteFavorite}>
                <FontAwesomeIcon icon={faTrash} /> 
            </Button>
          </Col>
        </Row>
        </div>
      </Container></div>
    )
}

export default Fav