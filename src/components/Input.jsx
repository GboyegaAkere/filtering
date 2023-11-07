import React from 'react'

const Input = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
            <label htmlFor="">
                <div className='flex flex-row items-center gap-2'>
                    <input type="radio" name='text'/>
                    <span>All</span>
                </div>  
            </label>
    </div>
  )
}

export default Input