import React, { Component } from 'react'
import { IoCartOutline } from 'react-icons/io5'

export class Navbar extends Component {
    render() {
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


                        <div className="flex gap-3 items-center">
                            <p><IoCartOutline/></p>
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
}

export default Navbar