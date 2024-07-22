import React, { useContext } from 'react'
import InfoContext from '../Contexts/Info/InfoContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const context1=useContext(InfoContext);
  const history=useNavigate();
  const {info}=context1;
  return (
    <div className='sticky top-0 flex justify-between items-center p-2 pl-5 pr-5 bg-zinc-950 bg-opacity-70 backdrop-filter backdrop-blur-sm'>
      <div className='flex text-white items-center'>
      <span className="material-symbols-outlined pr-4">menu</span>
      <img className='w-1/6 rounded-full' src={info.pic}  alt=" "></img>
      <div className='ml-2'> {info.name}</div>
      </div>
      <button className='text-white'  onClick={()=>history(0)}>
      <span className="material-symbols-outlined">add_circle</span>
      </button>
    </div>
  )
}

export default Navbar
