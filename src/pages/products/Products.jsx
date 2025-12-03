import React, { useEffect, useState } from 'react'
import { productService } from '../../api/products'

const Products = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const getProducts = async() => {
        try {
            const data = await productService();
            setProducts(data);
        } catch (error) {
            console.log("An errror occurred while fetching Products:", error);
        } finally {
            setLoading(false)
        }
    };
    getProducts();
}, []);

if (loading) return <p>Loading products...</p>

 return (
    <>
      <div className='productsContainer'>
        {products.map((product) => (
           <div className="productID" key={product.id}>
            <img src={product.image} className="productImg"/>
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            
           </div>

        ))}

      </div>
    </>
  )
}

export default Products
