import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteVideos } from '../Services/allAPI';

function VideoCard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true)
    const {caption , embedLink} = displayVideo

    let today = new Date()
    console.log(today);
    let timestamp = new  Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);
    let videoDetails = {
      caption,embedLink,timestamp
    }
    await addToHistory(videoDetails)
  }

  const removeVideo = async(id)=>{
    const response = await deleteVideos(id)
    setDeleteVideoStatus(true)
    
  }
  //functin to drag the videocard
  const cardDrag =async(e,id)=>{
   console.log(`The Id of the videocard dragged is ${id}`);
   e.dataTransfer.setData("videoID",id)
  }
  
  return (
    
    <>
      <Card style={{ width: '15rem', height:'40vh'}} className='mb-3' draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
      <Card.Img height={'280px'} onClick={handleShow} variant="top" src={displayVideo.url} />
      <Card.Body>
        <Card.Title className='d-flex  align-items-center'>
        <h6>{displayVideo.caption}</h6>
        </Card.Title>
        
        <Button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger '><i class="fa-solid fa-trash "></i></Button>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
   
  )
}

export default VideoCard