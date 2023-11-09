import axios from "axios"

export const commonAPI = async (httpMethods,url,reqBody)=>{
    const reqConfig ={
        method: httpMethods,
        url: url,
        data: reqBody,
        Headers:{
            "Content-Type":"application/json"
        }
}


return await axios(reqConfig).then((result)=>{
    return result

}).catch  ((error)=>{
    return error
})
}
