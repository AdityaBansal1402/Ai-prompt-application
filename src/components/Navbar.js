import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 flex justify-between p-2 pl-5 pr-5 bg-zinc-950 bg-opacity-70 backdrop-filter backdrop-blur-sm'>
      <div className='flex text-white'>
      <span className="material-symbols-outlined">menu</span>
      <div> Spectiler</div>
      </div>
      <div className='text-white'>
      <span className="material-symbols-outlined">add_circle</span>
      </div>
    </div>
  )
}

export default Navbar
