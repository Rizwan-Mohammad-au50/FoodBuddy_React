import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";


const CartItems = ({id,name,price,qty,image}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-5 shadow-md p-2 rounded-lg mb-5 ">
        <div>
            <MdDelete onClick={()=> {
              dispatch(removeFromCart({id,image,price,qty,name}))

              toast(`${name} Removed from cart`, {
                icon: '❌',
              });
              
            }} className=" absolute right-7 text-gray-600 cursor-pointer hover:text-red-600 text-xl" />
          <img
            className="w-[55px] h-[50px]"
            src={image}
            alt=""
          />
        </div>
        <div className=" leading-6">
          <h2 className=" font-bold text-gray-800">{name}</h2>
          

          <div className="flex justify-between">
            <span className="text-orange-500 font-bold">Rs. {price}/-</span>
            <div className="flex justify-center items-center gap-2 absolute right-7">
              
              <AiOutlineMinus onClick={()=> qty>1 ? dispatch(decrementQty({id})) : (qty = 1) } className=" border-2 border-gray-600 text-gray-600 rounded-md p-1 text-xl font-bold hover:bg-orange-600 hover:text-white hover:border-none cursor-pointer transition-all ease-linear" />
              <span>{qty}</span>
              <AiOutlinePlus onClick={()=> dispatch(incrementQty({id}))} className=" border-2 border-gray-600 text-gray-600 rounded-md p-1 text-xl font-bold hover:bg-orange-600 hover:text-white hover:border-none cursor-pointer transition-all ease-linear" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
