import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const today = new Date().toLocaleDateString()

    const navigate = useNavigate();

  return (
    <div className='flex flex-col pt-2 shadow-lg'>

      <div className='flex flex-auto justify-between'>
        <p className='pt-2 font-serif'>Date: {today}</p>
        <h1 className='text-6xl p-2 text-center font-bold font-customFont'>Daily Dispatch</h1>

        <div className='pt-1'>
          <button onClick={ () => {navigate("/subscribe")}} className='mx-1 p-1 w-[90px] border-2 border-red-600 rounded text-white bg-red-600'>Subscribe</button>
          <button className='mx-1 p-1 w-[90px] border-2 border-red-600 rounded text-red-600 hover:bg-red-600 hover:text-white hover:transition-all'>Login</button>
        </div>

      </div>
        <br />

        <div className='flex flex-row mt-5 justify-center mx-10'>
            <div className='font-serif w-[230px] text-xl mx-8 pr-10 cursor-pointer font-bold border-t-4 border-black'>India</div>
            <div className='font-serif w-[230px] text-xl mx-8 pr-10 cursor-pointer font-bold border-t-4 border-black'>World</div>
            <div className='font-serif w-[230px] text-xl mx-8 pr-10 cursor-pointer font-bold border-t-4 border-black'>Politics</div>
            <div className='font-serif w-[230px] text-xl mx-8 pr-10 cursor-pointer font-bold border-t-4 border-black'>Technology</div>
            <div className='font-serif w-[230px] text-xl mx-8 pr-10 cursor-pointer font-bold border-t-4 border-black'>E-Paper</div>
        </div>
        <br />
    </div>
  )
}

export default Navbar
