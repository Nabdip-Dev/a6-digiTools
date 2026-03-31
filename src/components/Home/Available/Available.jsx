import React, { useEffect, useState } from 'react';
import Sellar from '../Sellar/Sellar';
import Cart from '../Cart/Cart';

const Available = ({ sellarPromies }) => {
    const [sellar, setSellar] = useState([]);

    useEffect(() => {
        sellarPromies.then(data => {
            setSellar(data);
        });
    }, [sellarPromies]);

    const [selectType, setSelectType] = useState("available")
    // console.log(selectType)
    const [selectedSellar, setSelectedSellar] = useState([]);
    return (
        <>
            <div className='my-[120px]'>
                <div className='flex flex-col justify-center items-center space-y-3 mb-10'>
                    <h1 className='font-semibold text-[48px] text-center'>Premium Digital Tools</h1>
                    <p className=' text-[#627382] text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className='border border-[#F6F6F6] rounded-full p-0.5'>

                        <button
                            onClick={() => setSelectType("available")}
                            className={`btn pb-1 font-semibold rounded-full ${selectType === "available" ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`}>
                            Products
                        </button>

                        <button
                            onClick={() => setSelectType("selected")}
                            className={`btn pb-1 font-semibold rounded-full ${selectType === "selected" ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`}>
                            Cart ({selectedSellar.length})
                        </button>

                    </div>
                </div>
                {
                    selectType === "available" ? (<Sellar sellar={sellar} selectedSellar={selectedSellar} setSelectedSellar={setSelectedSellar}/>) : (<Cart selectedSellar={selectedSellar} setSelectedSellar={setSelectedSellar}/>)
                }

            </div>
        </>
    );
};

export default Available;