
import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { isUserLoggedIn, getUser,getToken } from "./utils/auth";
import { Link } from "react-router-dom";

function Videos(){
    const [allVids,setAllVids] = useState([])
    const [errors,setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false);
    const userId = getUser()
    const token = getToken()

    useEffect(()=>{
        fetch(`https://backend-dc1w.onrender.com/all_videos`)
        .then(res =>{
          if(res.ok){
            res.json().then((data)=>{
              // setAllVids(data)
              const updatedVids = data.map((vid) => ({ ...vid, error: false }));
             setAllVids(updatedVids);
            })
          }else{
            res.json().then((err)=>setErrors(err.errors))
          }
        })
    },[])

    useEffect(() => {
      if (showErrors) {
        const timeout = setTimeout(() => {
          setErrors([]);
          setShowErrors(false);
        }, 5000);

        return () => clearTimeout(timeout);
      }
    }, [showErrors]);

    console.log(errors)
    function handleLike(id) {
      fetch(`https://backend-dc1w.onrender.com/all_videos/${id}`, {
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
          res.json().then((err) => {
            const updatedVids = allVids.map((vid) =>
              vid.id === id ? { ...vid, error: true } : vid
            );
            setAllVids(updatedVids);
            setErrors([err.errors]);
            setShowErrors(true);
          })
        }})

    }
    return(
        <div className="mt-4" id="vids-con"> 
        <center className="mb-3">
          <h1>Our Videos</h1>
          <strong>Where we interact through videos</strong>
        </center>
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
                  variant="outline-warning" 
                  className="me-2"
                  onClick={() => handleLike(vid.id)}
                  >
                    <FontAwesomeIcon icon={faHeart}>
                    {vid.likes} Likes </FontAwesomeIcon>Like {vid.likes}</Button>
                  <Link to={`/videos/${vid.id}`}><Button variant="outline-warning">Watch now</Button></Link>
                  {vid.error  && (
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
