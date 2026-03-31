import React from 'react';

const Cart = ({ selectedSellar }) => {
    console.log(selectedSellar)
    return (
        <div className='container mx-auto mb-7 grid grid-cols-3 gap-10 justify-items-center'>

            {
                selectedSellar.map(sellar => {
                    return (
                        <h1>{sellar.name}</h1>
                    )
                })
            }

        </div>
    );
};

export default Cart;