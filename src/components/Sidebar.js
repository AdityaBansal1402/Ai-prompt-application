import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col p-3'>
      <div className='flex pb-5'>
        <span className="material-symbols-outlined text-white pr-2">info</span>
        <div>About us</div>
      </div>
      <div className='flex pb-5'>
        <span className="material-symbols-outlined text-white pr-2">call</span>
        <div>Contact us</div>
      </div>
      
    </div>
  )
}

export default Sidebar
