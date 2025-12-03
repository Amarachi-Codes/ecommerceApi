// import React, { useEffect, useState } from "react";
// import { productsById } from "../../api/productsById";
// import {useParams} from 'react-router-dom'

// const ProductsById = () => {
//   const { productId } = useParams();

//   const[product, setProduct] = useState(null)
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getAProduct = async () => {
//       try {
//         const data = await productsById();
//         setProduct(data);
//       } catch (error) {
//         console.log("An errror occurred while fetching Product:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getAProduct();
//   },
//   [productId]
// );

//   if (loading) return <p>Loading Product</p>;
//   if(!product) return <p>Product not found</p>
//   return (
//     <>
//       <div className="productsContainer">

//           <div className="productID" key={product.id}>
//             <img src={product.image} className="productImg" />
//             <h4>{product.title}</h4>
//             <p>{product.price}</p>
//           </div>

//       </div>
//     </>
//   );
// };

// export default ProductsById;

import React, { useState } from "react";
import "./Products.css";
import { productsById } from "../../api/productsById";

const ProductsById = () => {
  const [searchId, setSearchId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchId.trim()) return;

    setLoading(true);
    setError("");
    setProduct(null);

    try {
      const data = await productsById(searchId);

      if (!data) {
        throw new Error("Product not found");
      }
      setProduct(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="pageContent">
      <h2>Search Product by ID</h2>

      {/* Search Bar */}
      <div className="searchContainer">
        <input
          type="text"
          className="inputBar"
          placeholder="Enter product ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch} className="searchButton">
          Search
        </button>
      </div>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Product */}
      {product && (
        <div className="productsContainer">
          <div className="productID" key={product.id}>
            <img src={product.image} className="productImg" />
            <h4>Title:{product.title}</h4>
            <p className="description">
              <span>Description:</span> {product.description}
            </p>

            <p className="price">
              <span>Price:</span> {product.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsById;
