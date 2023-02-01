import React, { useState, useEffect } from 'react'
import '../App.css';

const Product = () => {
    const[products, setProducts] = useState([]);

    useEffect(() =>{
            const fetchProducts = async () =>{
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
            }
            fetchProducts();
    }, []);
    return (
        <>
            <div>
          {products.map((product) => (
            <div className="card" key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <button className="btn">Add to Cart</button>
            </div>
              ))}
            </div>
            <div style={{background:'orange',height:'50px'}}>
            This is footer.
             </div>
        </>
      );
      
}

export default Product