import React from 'react'

const HeaderAdmin = ({title, text}) => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
        <h1 className='text-2xl md:text-3xl font-bold'>{title} <span className='primaryColor'>{text}</span></h1>
    </div>
  )
}

export default HeaderAdmin