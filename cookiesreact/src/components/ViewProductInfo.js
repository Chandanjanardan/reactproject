import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewProductInfo = () => {
    const {id} =useParams()
    console.log(id,"this is id of product")
  useEffect(()=>{
    try {
        const fetchData=async()=>{
            let response= await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(response.data)
        }
        fetchData()
    } catch (error) {
        console.log(error)
    }
  })
    return (
    <div>ViewProductInfo</div>
  )
}

export default ViewProductInfo