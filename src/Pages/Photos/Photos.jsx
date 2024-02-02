import React from 'react'
import './Photos.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../../Component/Loader/Loader';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

function Photos() {
  let [Photo, setPhoto] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(function (response) {
        setPhoto(response.data);
        console.log(Photo);
      })
      .catch(function (error) {
        console.log(error);
      })
  },[])
  return (
    <div>
      <h3 className='text-center text-white m-0 p-4' style={{ background: '#2b2d42' }}>Photos</h3>
      {Photo.length == 0 ? <Loader /> :
        <Container fluid style={{ background: '#2b2d42' }}>
          <Row className='gap-5 justify-content-center py-4'>
            {
              Photo.map((ele) => {
                return (
                  <Col key={ele.id} xs={12} sm={6} md={4} lg={3}>
                    <Card className='bg-dark'>
                      <Card.Img variant="top" src={ele.url} />
                      <Card.Body className='text-light bg-dark' style={{height:'200px'}}>
                        <Card.Title>{ele.id}</Card.Title>
                        <Card.Text>
                        {ele.title}
                        </Card.Text>
                        <Button variant="primary">{ele.albumId}</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      }
    </div>
  )
}

export default Photos