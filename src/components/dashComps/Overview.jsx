import React from 'react';
import OverviewCard from '../OverviewCard';
import DataTable from '../DataTable';
import {FaLongArrowAltRight} from 'react-icons/fa'

function Overview(props) {
    //Overview Sample Data
    const overViewData = [
        {id: 1, title: 'How to make a lot money in th'},
        {id: 2, title: 'How t'},
        {id: 3, title: 'Top'},
        {id: 4, title: 'How'}
    ]
    
    const handleEdit = (id) => {
        console.log(`this item with id: ${id} is about to be edited`)
    }
    const handleDelete = (id) => {
        console.log(`this item with id: ${id} has been deleted`)
    }
    return (
        <div className='py-4 px flex flex-col lg:px-10 '>
            <h1 className='text-xl md:text-3xl text-cyan-950 font-semibold'>Overview</h1>
            <div className='items-start min-h-screen'>
                <OverviewCard/>
                <div className='flex justify-between items-center pt-6'>
                    <h1 className='text-md md:text-xl text-cyan-950 font-semibold'>Recent blogs</h1>
                    <a href="" className='flex gap-1 text-blue-700 items-center font-medium'>
                        <span className='text-xs md:text-sm '>View all</span>
                        <FaLongArrowAltRight/>
                    </a>
                </div>
                <DataTable data={overViewData} onEdit={handleEdit} onDelete={handleDelete}/>
            </div>
            <DataTable/>
        </div>
    );
}

export default Overview;