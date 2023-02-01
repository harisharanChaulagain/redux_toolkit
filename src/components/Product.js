import React, { useEffect } from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add} from '../store/cartSlice';
import { fetchProducts } from '../store/productsSlice';
import {STATUSES} from '../store/productsSlice';


const Product = () => {
    const dispatch = useDispatch();
    const {data:products, status} = useSelector((state) =>state.product)
    // const[products, setProducts] = useState([]);


    useEffect(() =>{
            // const fetchProducts = async () =>{
            //     const res = await fetch('https://fakestoreapi.com/products');
            //     const data = await res.json();
            //     setProducts(data);
            // }
            // fetchProducts();
            dispatch(fetchProducts());
    }, []);

    const handleAdd =(product) =>{
      dispatch(add(product));
    }

    if(status===STATUSES.LOADING)
    {
      return <h2>Loading....</h2>
    }
    return (
        <>
            <div>
          {products.map((product) => (
            <div className="card" key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <button onClick={() => handleAdd(product)} className="btn">Add to Cart</button>
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