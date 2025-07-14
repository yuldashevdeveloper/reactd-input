import React, { useEffect, useState } from 'react'
import './product.css'
import axios from 'axios';

const API_URL = "https://dummyjson.com";

const Product = () => {
    const[products,setProducts] = useState(null)
    const[error,setError] = useState(null)
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true);
        axios
            .get(`${API_URL}/products`,{params:{limit:8}})
            .then((res)=>{
                setProducts(res.data.products)
            })
            .finally(()=>{
                setLoading(false)
            })
    })

    if(error){
        return(
            <div>
                <p>somthing went wrong:(</p>
            </div>
        )
    }
  return (
    <>
    <div className='product_title'>
    <h2>Products</h2>
    <p>Order it for you or for your beloved ones </p>
    </div>

    <div className="container products_boxes">
        {
            products?.map((product)=>(
                <div className='products_card' key={product.id}>
                    <img className='product_img' src={product.thumbnail} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Product