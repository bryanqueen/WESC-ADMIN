import React, { useState } from 'react';
import ProgramCard from '../ProgramCard';
import { useEffect } from 'react';
import axios from 'axios';


const apiPath = 'https://fair-gold-termite-sock.cyclic.app/api/v1/'


function Programmes(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchProgrammes = async() => {
            const response = await axios.get(`${apiPath}programmes`)
            setData(response.data)
        }
        fetchProgrammes()
    }, [])
    return (
        <div className='flex flex-col '>
        <div className='py-4 flex justify-between items-center lg:px-10'>
            <h1 className='text-2xl text-cyan-950 font-semibold'>Programmes</h1>
            <a href="/create-program" className='md:px-3 md:py-2 px-1.5 py-1  bg-black text-gray-50 rounded-lg gap-2 flex items-center'>
                <span className=''>+</span>
                <span className='font-medium text-sm md:text-md '>Post New</span>
            </a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {data.map((item, idx) => (
                <ProgramCard
                    key={idx}
                    programName={item.programName} 
                    programType={item.programmeType}
                    tuitionFee= {item.tuitionFee}
                    appCode={item.appCode}
                    applicationFee={item.applicationFee}
                    duration={item.duration}
                    location={item.location}
                />
            ))}
        </div>
    </div>
    );
}

export default Programmes;