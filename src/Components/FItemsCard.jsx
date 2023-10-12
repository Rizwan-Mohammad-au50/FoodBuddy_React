import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/Slices/CartSlice';

const FItemsCard = ({id,name,image,price,desc,rating,handleToast}) => {
  const dispatch = useDispatch();
  return (
    <>
    <div className='ml-6 font-bold w-[250px] p-5 bg-white flex flex-col justify-center gap-2 rounded-lg'>
        <img className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' src={image} alt=""/>

        <div className='flex justify-between text-sm'>
            <h2>{name}</h2>
            <span className=' text-orange-600'>Rs. {price}/-</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>

        <div className='flex justify-between'>
            <span className='flex justify-center items-center'>
                <AiFillStar className='mr-1 text-yellow-400' />
                <p className='text-sm'>{rating}</p>
            </span>
            
            <button onClick = {() => {
              dispatch(addToCart({
                id,name,price,rating,image,qty:1
              }))
              handleToast(name);
            }} className=' text-sm p-2 text-white bg-orange-600 rounded-lg'>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default FItemsCard