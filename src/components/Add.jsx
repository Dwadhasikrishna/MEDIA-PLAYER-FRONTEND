import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videos , setvideos] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(videos);

  // upload video
  const handleUpload = async()=>{
    const{id,caption,url,embedLink}=videos
    if(!id || !caption || !url || !embedLink){
      toast.warning("please fill the form Completely")
    }
    else{
      const response = await uploadVideo(videos)
      console.log(response);
      if(response.status>=200 && response.status<300){
        setUploadVideoStatus(response.data)
        toast.success('upload sucessfully')
        handleClose()
      }
      else{
        console.log(response);
        toast.error('something went wrong.Try Again')
      }
    }
  }

  const embedVideoLink = (e)=>{
    const {value} = e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setvideos({...videos,embedLink:link})
  }
  
  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Videos</h5>
    <button  onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-down fs-5"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3"  controlId="formBasicEmail">
                 <Form.Control type="text" onChange={(e)=>setvideos({...videos,id:e.target.value})} placeholder="Enter Video id" />
   </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" onChange={(e)=>setvideos({...videos,caption:e.target.value})}  placeholder="Enter Video Caption" />
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" onChange={(e)=>setvideos({...videos,url:e.target.value})} placeholder="Enter Video Image Url" />
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" onChange={embedVideoLink} placeholder="Enter Youtube Video Link" />
            </Form.Group>  
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
        </Modal>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add

