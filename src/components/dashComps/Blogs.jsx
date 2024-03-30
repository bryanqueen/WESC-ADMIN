import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard';
import axios from 'axios';


const apiPath = 'https://fair-gold-termite-sock.cyclic.app/api/v1/'

function Blogs() {
    const [data, setData] = useState([]);
    useEffect(()=> {
        const fetchBlogData = async() => {
            const response = await axios.get(`${apiPath}blogs`);
            setData(response.data)
        }
    },[])
    return (
        <div className='flex flex-col'>
            <div className='py-4 flex justify-between items-center lg:px-10'>
            <h1 className='text-2xl text-cyan-950 font-semibold'>Blogs</h1>
            <a href="/create-blog" className='md:px-3 md:py-2 px-1.5 py-1  bg-black text-gray-50 rounded-lg gap-2 flex items-center'>
                <span>+</span>
                <span className='font-medium text-sm md:text-md'>Post a blog</span>
            </a>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {data.map((blog, idx) => (
                    <BlogCard/>
                ))}
            </div>
        </div>
    );
}

export default Blogs;