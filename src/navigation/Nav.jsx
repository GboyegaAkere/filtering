import React from 'react'
import {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai"

const Nav = () => {
  return (
    <nav>
        <div className='flex flex-row items-center justify-around  border-b-2 h-20 border-gray-100'>
            
                <input type="text" placeholder='search for product' className='rounded-lg h-10 bg-slate-50 flex items-center px-5' />
        

            <div className='flex flex-row items-center gap-12'>
                <a href="">
                    <FiHeart className='text-2xl'/>
                </a>
                <a href="">
                    <AiOutlineShoppingCart className='text-2xl'/>
                </a>
                <a href="">
                 <AiOutlineUserAdd className='text-2xl'/>
                </a>
            </div>
        </div>
    </nav>
   
  )
}

export default Nav