import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaRegCircleDot } from 'react-icons/fa6';
import bannerImg from '../../../assets/banner.png'

const Bannar = () => {
    return (
        <>
            <div className='flex gap-10 justify-between items-center mx-10 my-8'>
                <div className='flex flex-col gap-4'>
                    <p className="flex max-w-max px-4 py-2 gap-2 rounded-full items-center bg-[#E1E7FF]">
                        <FaRegCircleDot className='' />
                        <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
                            New: AI-Powered Tools Available
                        </span>
                    </p>
                    <h1 className='text-7xl font-bold'>Supercharge Your <br />Digital Workflow</h1>
                    <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity software—all <br />in one place. Start creating faster today.Explore Products
                    </p>
                    <div>
                        <button className="btn pb-1 font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 transition">
                            Explore Products
                        </button>
                        <button className='btn rounded-full border'><CiPlay1 /> Watch Demo</button>
                    </div>
                </div>
                <div className=''>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
            <div className='flex mx-auto justify-around bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-15 items-center'>
                <div>
                    <h1 className='font-bold text-[60px] text-white text-center'>50K</h1>
                    <p className='text-2xl text-[#FFFFFF]  text-center'>Active Users</p>
                </div>
                <div className="w-[2px] h-20 bg-white/40"></div>
                <div>
                    <h1 className='font-bold text-[60px] text-white text-center'>200+</h1>
                    <p className='text-2xl text-[#FFFFFF]  text-center'>Premium Tools</p>
                </div>
                <div className="w-[2px] h-20 bg-white/40"></div>
                <div>
                    <h1 className='font-bold text-[60px] text-white text-center'>4.9</h1>
                    <p className='text-2xl text-[#FFFFFF]  text-center'>Rating</p>
                </div>

            </div>
        </>
    );
};

export default Bannar;