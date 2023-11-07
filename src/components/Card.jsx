import React from 'react'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import data from '../db/data';
import { useSelector } from 'react-redux';

const Card = () => {
  const data = useSelector(state=>state.data.data)
  return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data && data.map((items)=>{
                return(
                  <div key={items} className='border-2  border-gray-100 w-40 h-45 py-3 px-3 rounded-lg'>
                      <img src={items.img} className='w-40' alt="" />
                      <div>
                          <p>{items.title}</p>
                      </div>
                      <div className='flex flex-row items-center'>
                      {items.star}
                      <p>({items.reviews})</p>
                      </div>

                      <div className='flex flex-row items-center gap-2'>
                          <p>{items.prevPrice}</p>
                          <p>{items.newPrice}</p>
                          <AiOutlineShoppingCart/>
                      </div>
                   </div>
                )
              })}
      </div> 
  )
}

export default Card