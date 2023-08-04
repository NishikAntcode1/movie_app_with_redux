import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-gray-900 z-40">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link to={"/"} className="flex items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3698/3698776.png" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Movie App</span>
            </Link>
            <div className="flex items-center">
            <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU" alt="user" />
                {/* <Link to="#" className="text-sm text-blue-500 hover:underline">Login</Link> */}
            </div>
        </div>
      </nav>
  )
}

export default Header
