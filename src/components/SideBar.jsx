import React from 'react'
import Colors from './Colors'
import Category from './Category'
import Price from './Price'

const SideBar = () => {
  return (
    <div >
      <section className='w-40 fixed h-full z-3 flex flex-col ml-5 items-center  border-r-2 mt-10  border-gray-100'>
          <div className='mb-5'>
            LOGO
          </div>
          <div className='mt-10'>
            <Category/>
            <Price/>
            <Colors/>
          </div>
          
      </section>
    </div>
  )
}

export default SideBar