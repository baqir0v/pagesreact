import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./pages.scss"

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const { productId} = useParams();

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:3000/product/${productId}`)
                const jsonData = await response.json()
                setProduct(jsonData)
            }
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }, [])

  return (
    <div className='productcard'>
        <img src={product.image} alt="" />
        <h5>{product.name}</h5>
        <span>{product.price}</span>
    </div>
  )
}

export default ProductDetail