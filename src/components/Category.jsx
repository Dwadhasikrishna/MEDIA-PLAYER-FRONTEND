import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addAllCategory, deletecategory, getAVideo, getAllcategories, updateCategory } from '../Services/allAPI';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category() {

  const [categoryName , setCatogryName] = useState("")
  const [category , setCategory] = useState([])

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to get all catogories
  const allCategory = async()=>{
  const {data} =await getAllcategories()
  // console.log(data);
  setCategory(data)
  }
  console.log(category);

 useEffect(()=>{
  allCategory()
 },[])

 //function to delete
 const deleteAcategory=async(id)=>{
  await deletecategory(id)
  //to get the remaining categories
  allCategory()
 }

  //function to add catogory
  const addCategory = async()=>{
    console.log(categoryName);
    if(categoryName){
      let body = {
        categoryName,
        addvideos:[]
      }
      const response = await addAllCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('catogory added successfully')
        //state value is made null
        setCatogryName("")
        //close modal
        handleClose()
      }
      else{
        toast.error('something went wrong')
      }
    }
    else{
      toast.warning('please enter catogory name')
    }
   
  }


  //function to prevent the reload.so that data that we send wont lost
  const dragOver= (e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e,categoryId)=>{
    console.log(`droped on the category Id ${categoryId}`);

    //to get data sent from videocard
   let videoId = e.dataTransfer.getData('videoID')
   console.log(videoId);
   //get a video from backend
   const {data} = await getAVideo(videoId)
   console.log(data);
   //get the id of the video from a selected category.Then we get the id of tha video from that selected category.
   const selectedCategory = category.find(item=>item.id===categoryId)
  //then push the all details from the selected category.so we need to push data into the particular array. 
   selectedCategory.addvideos.push(data)
   console.log(selectedCategory);

   //to update the category with new videos
   await updateCategory(categoryId,selectedCategory)
   //to update automatically
   allCategory()
  }


  return (
    <>
    <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
    </div>

    {category?.length>0?
      category?.map((item)=>(<div className='m-5 border border-secondary p-3 rounded'>
      <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
      <h6>{item.categoryName}</h6>
      <Button onClick={()=>deleteAcategory(item?.id)}  className='btn btn-danger '><i class="fa-solid fa-trash-can "></i></Button>
      </div>
      <Row>
        <Col>
        { item?.addvideos?.length > 0?
        item?.addvideos?.map(card=>( <VideoCard displayVideo={card}/>))
       : <p>Nothing to display</p>}
        </Col>
      </Row>

    </div>))
    :
    <p className='mt-3 fw-bolder fs-5 text-danger'>No Category Added</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil "></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary rounded p-3'>

          

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
                    <Form.Control type="text" placeholder="Category name" onChange={(e)=>setCatogryName(e.target.value)} />
            </Form.Group> 
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCategory} variant="primary">Upload</Button>
        </Modal.Footer>
        </Modal>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
   
  )
}

export default Category