import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';



const Cart = () => {
  const dispatch =useDispatch();
  const products = useSelector(state => state.cart);
  const handleRemove = (productId)=>{
    dispatch(remove(productId));
  }
  return (
    <div>
      <h3>Cart Items</h3>
      <div>
        {
          products.map(product =>(
            <div key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.title}</h5>
              <button onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
          ))

        }
      </div>

    </div>
  )
}

export default Cart