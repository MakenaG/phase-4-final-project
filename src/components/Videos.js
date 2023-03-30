import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Videos(){
    const [allVids,SetallVids] = useState([])

    useEffect(()=>{
        fetch(`https://backend-dc1w.onrender.com/all_videos`)
        .then(res =>res.json())
        .then(data =>SetallVids(data))
    },[])
    console.log(allVids)
    return(
        <div className="mt-4"> 
        <Container>
        <Row>
          {allVids.map((vid) => (
            <Col key={vid.id} lg={4} md={6} className="mb-4">
              <Card>
                <div className="ratio ratio-16x9">
                  <iframe src={vid.video} poster={vid.image} title={vid.title} controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
                <Card.Body>
                  <Card.Title>{vid.title}</Card.Title>
                  <Card.Text>{vid.description}</Card.Text>
                  {/* <Button variant="primary">Watch now</Button> */}
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
