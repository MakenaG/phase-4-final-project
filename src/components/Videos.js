
import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { isUserLoggedIn, getUser,getToken } from "./utils/auth";

function Videos(){
    const [allVids,setAllVids] = useState([])
    const [errors,setErrors] = useState([])
    const userId = getUser()
    const token = getToken()
    useEffect(()=>{
        fetch(`http://127.0.0.1:3000/all_videos`)
        .then(res =>{
          if(res.ok){
            res.json().then((data)=>setAllVids(data))
          }else{
            res.json().then((err)=>setErrors(err.errors))
          }
        })
    },[])
    console.log(errors)
    function handleLike(id) {
      fetch(`http://127.0.0.1:3000/all_videos/${id}`, {
        method: "POST",
        headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            },
        body: JSON.stringify({user_id: userId})
      })
        .then((res) => {
          if(res.ok){
          res.json().then((data) => {
            const updatedVids = allVids.map((vid) =>
              vid.id === data.id ? { ...vid, likes: data.likes } : vid
            );
            setAllVids(updatedVids);
          })
        }else{
          res.json().then((err)=>setErrors([err.errors]))
        }})

    }
    return(
        <div className="mt-4"> 
        <Container>
        <Row>
          {allVids.map((vid) => (
            <Col key={vid.id} lg={4} md={6} className="mb-4">
              <Card>
                <div className="ratio ratio-16x9">
                  <iframe 
                  src={vid.video} 
                  poster={vid.image} 
                  title={vid.title}
                  autoPlay
                  muted
                  loop 
                  controls 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen/>
                </div>
                <Card.Body>
                  <Card.Title>{vid.title}</Card.Title>
                  <Card.Text>{vid.description}</Card.Text>
                  <Button 
                  variant="primary" 
                  className="me-2"
                  onClick={() => handleLike(vid.id)}
                  >
                    <FontAwesomeIcon icon={faHeart}>
                    {vid.likes} Likes </FontAwesomeIcon>Like {vid.likes}</Button>
                  <Button variant="primary">Watch now</Button>
                  {errors.length > 0 && (
                    <div className="text-danger mt-3">
                      {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>
      </div>
    )
}

export default Videos
