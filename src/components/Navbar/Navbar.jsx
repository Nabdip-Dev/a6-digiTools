import React, { Component } from 'react'
import { IoCartOutline } from 'react-icons/io5'

const Navbar = ({selectedSellar}) =>  {
        return (
            <>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="flex justify-between items-center w-full px-5">

                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                DigiTools
                            </h1>
                        </div>


                        <div>
                            <ul className="flex gap-5">
                                <li className='text-[#101727]'>Products</li>
                                <li className='text-[#101727]'>Features</li>
                                <li className='text-[#101727]'>Pricing</li>
                                <li className='text-[#101727]'>Testimonials</li>
                                <li className='text-[#101727]'>FAQ</li>
                            </ul>
                        </div>


                        <div className="flex gap-5 items-center">
                            <div className="relative inline-block">
                                <IoCartOutline size={30} />

                                {selectedSellar.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {selectedSellar.length}
                                    </span>
                                )}
                            </div>
                            <p>Login</p>
                            <button className="btn pb-1 font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    
}

export default Navbar