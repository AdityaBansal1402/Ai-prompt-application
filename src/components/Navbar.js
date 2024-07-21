import React, { useContext } from 'react'
import InfoContext from '../Contexts/Info/InfoContext'

const Navbar = () => {
  const context1=useContext(InfoContext);
  const {info}=context1;
  return (
    <div className='sticky top-0 flex justify-between items-center p-2 pl-5 pr-5 bg-zinc-950 bg-opacity-70 backdrop-filter backdrop-blur-sm'>
      <div className='flex text-white items-center'>
      <span className="material-symbols-outlined pr-4">menu</span>
      <img className='w-1/6 rounded-full' src={info.pic}  alt=" "></img>
      <div className='ml-2'> {info.name}</div>
      </div>
      <div className='text-white'>
      <span className="material-symbols-outlined">add_circle</span>
      </div>
    </div>
  )
}

export default Navbar
