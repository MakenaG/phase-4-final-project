import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faPlus,faShare } from "@fortawesome/free-solid-svg-icons";
import { getToken,getUser } from "./utils/auth";

function OneVid(){
    const { id } = useParams();
    const [vid,setVid] = useState([])
    const [errors,setErrors] = useState([])
    const token = getToken()
    const userId = getUser()

    useEffect(()=>{
        fetch(`https://backend-dc1w.onrender.com/all_videos/${id}`)
        .then(res =>{
          if(res.ok){
            res.json().then((data)=>{
              setVid(data)
              
            })
          }else{
            res.json().then((err)=>setErrors([err.errors]))
          }
        })
    },[id])
 
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
      
            setVid(data);
          })
        }else{
          res.json().then((err) => {
        
            setErrors([err.errors]);
          })
        }})

    }
    

    return(
        <div className="d-flex justify-content-center" id="vids-con">
            
             <Container fluid className="my-4">
      {errors.length > 0 && (
        <div className="text-danger">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <Row>
        <Col lg={8} md={12}  className="mx-auto ">
          <div className="ratio ratio-16x9">
            <iframe
              src={vid.video}
              title={vid.title}
              autoPlay
              muted
              loop
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h2 className="mt-3">{vid.title}</h2>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button variant="outline-dark" className="me-3">
              <FontAwesomeIcon icon={faPlus} /> Subscribe
            </Button>
            <Button variant="outline-dark" className="me-3">
                <FontAwesomeIcon icon={faShare} /> Share
              </Button>
              </div>
              <div  className="ms-auto">
              <Button variant="outline-dark" onClick={() => handleLike(vid.id)}>
                <FontAwesomeIcon icon={faHeart} /> {vid.likes}
              </Button>
              </div>
          </div>
          <hr />
          <p>{vid.description}</p>
        </Col>
        </Row>
        </Container>
        </div>
    )
}

export default OneVid