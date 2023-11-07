import React from 'react'

const Recommended = () => {
  return (
    <div>
       
        <div className='flex flex-row gap-3 md:ml-60 mt-4  '>
        <p className='text-2xl font-semibold'>Recommended</p>
            <button className='h-6 border-2  border-gray-100 rounded-lg py-4 flex items-center px-2'>All product</button>
            <button className='h-6 border-2  border-gray-100 rounded-lg py-4 flex items-center px-2'>Nike</button>
            <button className='h-6 border-2  border-gray-100 rounded-lg py-4 flex items-center px-2'>Adidas</button>
            <button className='h-6 border-2  border-gray-100 rounded-lg py-4 flex items-center px-2'>Puma</button>
            <button className='h-6 border-2  border-gray-100 rounded-lg py-4 flex items-center px-2'>Vans</button>
        </div>
    </div>
    
  )
}

export default Recommended