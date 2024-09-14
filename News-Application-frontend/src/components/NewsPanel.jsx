import React from 'react'

const NewsPanel = () => {
  return (
    <div className='mt-10'>
      
        <h1 className='text-center font-serif text-2xl'>NEWS</h1>
        <hr className='p-1 mt-3 border-t-2 border-black' /><hr className='p-1 border-t-2 border-black' /><hr className='p-1 border-t-2 border-black' />

        <br />

        <div className='grid grid-cols-[1fr_2fr_1fr] gap-2 justify-center text-center'>

            <div className='font-serif flex flex-col'>
                <p className='text-xl font-bold mb-5'>India</p>
                <div className='w-[100%] border-2 border-black m-1'>news1</div>
                <div className='w-[100%] border-2 border-black m-1'>news2</div>
                <div className='w-[100%] border-2 border-black m-1'>news3</div>
            </div>

            <div className='font-serif flex flex-col'>
                <p className='text-xl font-bold mb-5'>Breaking</p>
                <div className='w-[100%] border-2 border-black m-1'>news1</div>
                <div className='w-[100%] border-2 border-black m-1'>news2</div>
                <div className='w-[100%] border-2 border-black m-1'>news3</div>
            </div>

            <div className='font-serif flex flex-col'>
                <p className='text-xl font-bold mb-5'>Most Popular</p>
                <div className='w-[100%] border-2 border-black m-1'>news1</div>
                <div className='w-[100%] border-2 border-black m-1'>news2</div>
                <div className='w-[100%] border-2 border-black m-1'>news3</div>
            </div>

        </div>

    </div>
  )
}

export default NewsPanel
