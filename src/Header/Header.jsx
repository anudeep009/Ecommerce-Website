'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import Home from '../Home/Home'

const menuItems = [
  {
    name: 'Home'
  },
  {
    name: 'AllProducts'
  },
  {
    name: 'Cart'
  },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const isUserLoggedIn = () => true

  return (
    <div className="relative w-full bg-white">
      <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
          {/* logo goes here */}
          </span>
          <Link to="/Home" element = {<Home />}>
          <span className="font-bold">QuickMart</span>
          </Link>
        </div>
        <div className="items-start hidden grow lg:flex">
          <ul className="inline-flex ml-12 space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                to={`/${item.name}`}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
        {isUserLoggedIn ? <Link to="/Signup">
          <button
            type="button"
            className="px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign Up
          </button>
          </Link> : <Link to="/Signin">
          <button
            type="button"
            className="px-3 py-2 text-sm font-semibold text-black bg-transparent rounded-md hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign In
          </button>
          </Link> }
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden">
            <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      {/* logo goes here  */}
                    </span>
                    <span className="font-bold">QuickMart</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        to={`/${item.name}`}
                        className="flex items-center p-3 -m-3 text-sm font-semibold rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              <div className="mt-2 space-y-2">
                  <Link to="/Signin">
                    <button
                      type="button"
                      className="w-full px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link to="/Signup">
                    <button
                      type="button"
                      className="w-full px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div> 
            </div>
          </div>
        )}
      </div>
      <div className='mt-6'>
      <Dropdown />
      </div>
    </div>
  )
}


export default Header;