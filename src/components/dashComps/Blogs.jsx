import React from 'react';

function Blogs() {
    return (
        <div className='flex flex-col'>
            <div className='py-4 flex justify-between items-center lg:px-10'>
            <h1 className='text-2xl text-cyan-950 font-semibold'>Blogs</h1>
            <a href="" className='md:px-3 md:py-2 px-1.5 py-1  bg-black text-gray-50 rounded-lg gap-2 flex items-center'>
                <span>+</span>
                <span className='font-medium text-sm md:text-md'>Post a blog</span>
            </a>
        </div>
        </div>
    );
}

export default Blogs;