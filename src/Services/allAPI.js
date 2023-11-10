

import { commonAPI } from "./commonAPI"
import { serverURL } from "./surl"



 //upload video
export const uploadVideo = async(reqBody)=>{
   //return the value to Add.jsx component
  return  await commonAPI('POST',`${serverURL}/video`,reqBody)
}

//get all uploaded video

 export const getAllVideos = async()=>{
  //return the value to view.jsx component
return await commonAPI('GET',`${serverURL}/video`,"")
}

//to delete a video
export const deleteVideos = async(id)=>{
return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

//api to add history
export const addToHistory = async(videoDetails)=>{
  return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}
  
//api to get history from json-server
export const getAllHistory =  async()=>{
  return  await commonAPI('GET',`${serverURL}/history`)
}

//api to add category
export const addAllCategory =  async(body)=>{
  return  await commonAPI('POST',`${serverURL}/category`,body)
}

//to delete a video
export const deleteVideoHistory = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
  }
  
//api to get all category from json server
export const getAllcategories =  async()=>{
  return  await commonAPI('GET',`${serverURL}/category`,"")
}

//to delete a video
export const deletecategory = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
  }

//to get a particular video from  'http://localhost:5000/video'

export const getAVideo =  async(id)=>{
  return  await commonAPI('GET',`${serverURL}/video/${id}`,"")
}


//api to update the category with new videos

export const updateCategory = async(id,body)=>{
 return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}