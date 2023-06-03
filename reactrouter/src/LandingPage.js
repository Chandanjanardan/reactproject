import React, { useEffect, useState } from 'react';
import axios from 'axios';

// use effect
// hook responsible for side effect like api calling

function LandingPage() {
    const [counter, setCounter] = useState(0)
    const [product, setProduct] = useState([])
    let a = 10
    // console.log("i am redering in landing page componennt")
    // https://dummyjson.com/products 
    useEffect(() => {
        console.log("I am hello from useeffect")
        const apicaling = async () => {
            try {
                let response = await axios.get("https://dummyjson.com/products")
                console.log(response.data.products)
                setProduct(response.data.products)

            } catch (error) {
                console.log(error)
            }
        }
        apicaling()
        // let body= document.querySelector(".header");
        // console.log(body)
    }, [])
    // console.log(" I am below useeffect")
    // case 1: when dependency array is empty it will run only once
    // case 2: when dependency array have some stte or props
    // then the state and props changes your useeffect trigger that many time
    console.log("This are the products", product)
    return (
        <div className='header'>
            <button onClick={() => setCounter(counter + 1)}>+{counter}</button>
            


            {
                product.length!==0 ? product.map((element)=>{
                    return(
                        <div className='card'>
                            <div>Image :{element.thumbnail}
                            <img src={element.thumbnail}/>
                            </div>
                            <div className='title'>{element.title}</div>
                            <div className='brand'>{element.brand}</div>
                        </div>
                    )

                }):<div>No data</div>
            }
        </div >
    )
}


export default LandingPage