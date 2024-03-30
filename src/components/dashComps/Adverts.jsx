import React from 'react';

function Adverts(props) {
    return (
        <div className='flex flex-col'>
            <div className='py-4 flex justify-between items-center lg:px-10'>
            <h1 className='text-2xl text-cyan-950 font-semibold'>Adverts</h1>
            <a href="" className='md:px-3 md:py-2 px-1.5 py-1 bg-black text-gray-50 rounded-lg gap-2 flex items-center'>
                <span>+</span>
                <span className='font-medium md:text-md text-sm'>Post an Ad</span>
            </a>
            </div>
        </div>
    );
}

export default Adverts;