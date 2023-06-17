import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewProductInfo = () => {
    const {id} =useParams()
    const [product, setProduct]=useState([])
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
        <div className='header'>
        
        


        {
            product.length!==0 ? product.map((element)=>{
                return(
                   <div className='card-container'> 
                        <div>
            {
                
                product.length !== 0 ? product.map((element) => (
                    <div className='card'>
                        <img src={element.thumbnail} />
                        <div>
                        <div>{element.title}</div>
                        <div>{element.brand}</div>
                        <div className='card-footer'>
                            <button className='addtocart'>Add to cart</button>
                            <Link to={`/pro/${element.id}`}>


                            <button className='viewinfo'>View Info</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                )):<div>No products found</div>
            
            }

        </div>
                    </div>
                
                )

            }):<div>No data</div>
            
        }
        
    </div >
  )
}

export default ViewProductInfo