import React, {useContext}from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/Shop-context';
import  {CartItem} from './Cart-items'
import './Cart.css';
import { useNavigate } from 'react-router';
export const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(ShopContext);
  const calculateTotalAmount = getTotalAmount();
  const navigate = useNavigate(); 
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
              return <CartItem data={product}></CartItem>
          }
        })}
      </div>
      {calculateTotalAmount > 0 ?
      <div className="checkout">
        <p>Subtotal : ${calculateTotalAmount}</p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
       : <h1>Your Cart is Empty</h1> }
    </div>
  )
}
