import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import {FaShoppingCart} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const [activeCart,setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart)
  const totalQuantity = cartItems.reduce((total,item) => total+item.qty , 0)
  const totalPrice = cartItems.reduce((total,item) => total+item.qty * item.price,0)
  // console.log(cartItems)

  const Navigate = useNavigate();
  
  return (
    <>
      <div className={` fixed right-0 top-0 w-full lg:w-[25vw] h-full bg-white p-5 mb-3 
      ${
        activeCart ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500 z-50`}>
        <div className="flex justify-between items-center my-3">
          <span className="text-xl text-gray-800 font-bold">My Orders</span>
          <AiOutlineClose onClick={() => setActiveCart(false)} className=" cursor-pointer border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-600 hover:border-red-600" />
        </div>

        <div className="" >
          {
            cartItems.length > 0 ? 
            cartItems.map((item)=> {
              return <CartItems 
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              qty={item.qty} />
            })
            :
            <h2 className=" text-center text-xl font-bold text-gray-400">Your Cart is empty</h2>
          }
            
        </div>

        <div className=" absolute bottom-0 right-0 px-3 flex flex-col justify-center items-center w-full">
        <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <h3 className="mt-1 font-semibold text-gray-800">Items : {totalQuantity} </h3>
          <h3 className=" font-semibold text-gray-800">Total Amount : {totalPrice}</h3>
          {/* <hr className="w-[90vw] lg:w-[18vw] my-2" /> */}
          <button 
          onClick={() => Navigate("/success")}
          className=" bg-orange-500 font-bold px-3 mx-0 text-white py-2 rounded-lg cursor-pointer flex justify-center items-center w-full my-5 hover:bg-orange-600 ">
            Checkout
          </button>
          {/* lg:w-[22vw] w-[85vw] */}
        </div>
      </div>
      <FaShoppingCart onClick={()=> setActiveCart(!activeCart)} className={` bg-white rounded-2xl shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${totalQuantity > 0 &&  "animate-bounce delay-500 transition-all"}`} />
    </>
  );
};

export default Cart;
