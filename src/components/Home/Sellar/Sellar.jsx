import React from 'react';
import Card from '../../ui/Card/Card';

const Sellar = ({ sellar, selectedSellar, setSelectedSellar}) => {
    // console.log(sellar)
    return (
        <div className='container mx-auto mb-7 grid grid-cols-3 gap-10 justify-items-center'>

            {
                sellar.map(sellar => {
                    return (
                        <Card key={sellar.id} sellar={sellar} selectedSellar={selectedSellar} setSelectedSellar={setSelectedSellar}/>
                    )
                })
            }

        </div>
    );
};

export default Sellar;