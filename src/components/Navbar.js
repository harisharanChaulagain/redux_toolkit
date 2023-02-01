import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',background:'orange',height:'50px'}}>
        <span className="applogo">eShopping</span>
        <div>
            <Link className="homepage" to="/">Home</Link>
            <Link className="cartpage" to="/cart">Cart</Link>
            <span className="cartitems">Cart Items: {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar