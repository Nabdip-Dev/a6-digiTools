import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import bannerImg from '../../../../public/assets/banner.png'
import cerImg from '../../../../public/assets/Group 5.png'
import { FaArrowRight } from 'react-icons/fa';


const Bannar = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-10 justify-between items-center mx-10 my-8'>
                <div className='flex flex-col items-center lg:items-start  gap-4 order-2 lg:order-1'>
                    <p className="flex max-w-max px-4 py-2 gap-2 rounded-full items-center bg-[#E1E7FF]">
                        <img src={cerImg} alt="" />
                        <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
                            New: AI-Powered Tools Available
                        </span>
                    </p>
                    <h1 className='text-4xl md:text-7xl text-center lg:text-start font-bold'>Supercharge Your <br /><span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Digital Workflow</span></h1>
                    <p className='text-[#627382] text-center lg:text-start'>Access premium AI tools, design assets, templates, and productivity software—all <br />in one place. Start creating faster today.Explore Products
                    </p>
                    <div className='flex flex-row gap-2'>
                        <button className="btn pb-1 font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 transition">
                            Explore Products <FaArrowRight />
                        </button>
                        <button className="btn flex flex-row items-center gap-2 px-4 py-2 border border-purple-500 rounded-full text-purple-500 hover:bg-purple-100 transition">
                            <CiPlay1 />
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div className='order-1 lg:order-2'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
            <div className='w-[330px] rounded-se-[20px] md:rounded-none md:w-full flex flex-col gap-4 md:flex-row mx-auto justify-around bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-15 items-center'>
                <div>
                    <h1 className='font-bold text-[60px] text-white text-center'>50K</h1>
                    <p className='text-2xl text-[#FFFFFF]  text-center'>Active Users</p>
                </div>
                <div className="w-[2px] hidden md:block h-20 bg-white/40"></div>
                <div>
                    <h1 className='font-bold text-[60px] text-white text-center'>200+</h1>
                    <p className='text-2xl text-[#FFFFFF]  text-center'>Premium Tools</p>
                </div>
                <div className="w-[2px] hidden md:block h-20 bg-white/40"></div>
                <div>
                    <h1 className='font-bold text-[60px] text-white text-center'>4.9</h1>
                    <p className='text-2xl text-[#FFFFFF]  text-center'>Rating</p>
                </div>

            </div>
        </>
    );
};

export default Bannar;