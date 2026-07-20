import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md text-white px-8 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Mogify
      </h1>

      <ul className="flex gap-8">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">Features</li>
        <li className="cursor-pointer hover:text-gray-400">Pricing</li>
      </ul>

      <button className="bg-white cursor-pointer text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
        Analyze Face
      </button>
    </nav>
    </>
  )
}

export default Navbar
