import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div >
      <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-5  flex w-full justify-between flex-col bg-red-600'>
        <img className='w-16 ml-4 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
         <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>continue</Link>
         </div>
      </div>
    </div>
  )
}

export default Home
