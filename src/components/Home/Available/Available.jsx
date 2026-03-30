import React, { use } from 'react';
import Sellar from '../Sellar/Sellar';

const Available = ({sellarPromies}) => {
    const sellar = use(sellarPromies)
    // console.log(sellar)
    return (
        <>
            <div className='my-[120px]'>
                <div className='flex flex-col justify-center items-center space-y-3 mb-10'>
                    <h1 className='font-semibold text-[48px] text-center'>Premium Digital Tools</h1>
                    <p className=' text-[#627382] text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className='border border-[#F6F6F6] rounded-full p-0.5'>
                         <button className="btn pb-1 font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 transition">
                            Products
                        </button>
                         <button className="btn pb-1 font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 transition">
                            Cart (2)
                        </button>
                    </div>
                </div>
                <Sellar sellar={sellar} />
            </div>
        </>
    );
};

export default Available;