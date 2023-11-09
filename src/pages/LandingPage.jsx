import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigativeByUrl = useNavigate()
  return (
    <>
    <Row className='d-flex justify-content-center align-items-center'>
      <Col></Col>
      <Col lg={5}>
        <h2 className='mt-5'>Welcome to <span className='text-warning'>Media Player</span></h2>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque suscipit vitae tempore nisi sit, doloribus enim quo aliquam porro asperiores, minima expedita sed repudiandae qui harum minus, animi amet!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dicta esse architecto vero quo, enim consectetur, aliquam ea vitae alias qui. Laborum, quod! Recusandae vero animi numquam nisi reiciendis accusantium.
        </p>
        <button onClick={()=>navigativeByUrl('/home')} className='btn btn-warning mt-5'>Get Started<i class="fa-solid fa-arrow-right ms-2"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
      </Col>
    </Row>
    <div className="container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column">
      <h3 className='mb-5'>Features</h3>
      <div className="cards d-flex justify-content-evenly align-items-center w-100 mb-5">
          <Card className='p-4' style={{ width: '22rem' }}>
              <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
              <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
              <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      </div>
      <div className='container border border-2 rounded border-secondary p-5 mt-5 mb-5'>
      <Row>
        <Col lg={5}>
          <h3 className='text-warning'>Simple Fast And Powerful</h3>
          <p><span className='fs-5 fw-bolder '>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit saepe atque velit magni laboriosam autem. Magni fuga ipsa voluptates vitae? Quis in recusandae consequatur repellat consectetur beatae illum enim.</p>
          <p><span className='fs-4 fw-bolder '>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit saepe atque velit magni laboriosam autem. Magni fuga ipsa voluptates vitae? Quis in recusandae consequatur repellat consectetur beatae illum enim.</p>
          <p><span className='fs-4 fw-bolder '>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit saepe atque velit magni laboriosam autem. Magni fuga ipsa voluptates vitae? Quis in recusandae consequatur repellat consectetur beatae illum enim.</p>
        </Col>
        <Col></Col>
        <Col lg={6}>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>
      </div>
      
    </>
  )
}

export default LandingPage