import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',background:'orange',height:'50px'}}>
        <span className="applogo">eShopping</span>
        <div>
            <Link className="homepage" to="/">Home</Link>
            <Link className="cartpage" to="/cart">Cart</Link>
            <span className="cartitems">Cart Items:0</span>
        </div>
    </div>
  )
}

export default Navbar