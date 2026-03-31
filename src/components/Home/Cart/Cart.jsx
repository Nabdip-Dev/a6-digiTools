import React from 'react';

const Cart = ({ selectedSellar, setSelectedSellar }) => {
    console.log(selectedSellar)
    const totalPrice = selectedSellar.reduce((total, sellar) => total + sellar.price, 0);
    const onRemove = (sellar) => {
        const filterPlayers = selectedSellar.filter(selectedSellar => selectedSellar.name != sellar.name)
        setSelectedSellar(filterPlayers);
    }
    const clearCart = () => {
        setSelectedSellar([]);  // খালি অ্যারে সেট করলো, কার্ট ক্লিয়ার হবে
    };
    return (
        <>
            <div className='container mx-auto p-6 border-2 border-[#F2F2F2]  rounded-lg  w-[1120px]'>
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                <div className='space-y-4'>
                    {
                        selectedSellar.map(sellar => {
                            return (

                                <div
                                    className="flex items-center justify-between py-5 px-3 bg-[#F9FAFC] rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className=' bg-white border-1 border-[#F2F2F2] rounded-full p-3'>
                                            <img
                                                src={sellar.image}
                                                alt={sellar.name}
                                                className="w-10 h-10 rounded"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xl">{sellar.name}</p>
                                            <p className="text-gray-500">${sellar.price}</p>
                                        </div>
                                    </div>

                                    <button
                                        className="text-pink-500 hover:underline text-sm font-medium"
                                        onClick={() => onRemove(sellar)} >
                                        Remove
                                    </button>
                                </div>

                            )
                        })
                    }
                </div>



                <div>
                    <div className="flex mx-auto items-center justify-between my-5 w-full">
                        <span className="font-semibold">Total:</span>
                        <span className="text-xl font-bold">${totalPrice}</span>
                    </div>

                    <div className=' flex mx-auto w-full'>
                        <button
                            onClick={clearCart}
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-full font-semibold hover:opacity-90 transition">
                            Proceed To Checkout
                        </button>
                    </div>
                </div >
            </div>

        </>
    );
};

export default Cart;