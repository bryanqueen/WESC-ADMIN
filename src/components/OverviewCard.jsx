import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {GrArticle} from 'react-icons/gr';
import {TbSchool} from 'react-icons/tb';
import {HiOutlineBuildingOffice2} from 'react-icons/hi2';

const apiPath = 'https://fair-gold-termite-sock.cyclic.app/api/v1/';

const BlogData = [
  1,
  2,
  3,
  4
]

const OverviewCard = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [programmeCount, setProgrammeCount] = useState(0);
  const [advertCount, setAdvertCount] = useState(0);

  useEffect(() => {
    // Fetch data from the database to get the counts
    // Example: You might have API calls here to get the counts

    const fetchBlogCount = async() => {
      // const response = await axios.get(`${apiPath}blogs/`);
      // console.log(typeof(response))
      const response = BlogData;
      setBlogCount(response.length)
    }

    const fetchProgrammeCount = async() => {
      setProgrammeCount(20)
    }
    
    const fetchAdvertCount = async() => {
      setAdvertCount(10)
    }
    fetchBlogCount();
    fetchProgrammeCount();
    fetchAdvertCount();
  }, []);

  return (
    <div className="flex flex-col md:flex-row  justify-start gap-4 md:gap-6 mt-4">
      {/* Blog Overview Card */}
      <div className=" bg-white p-4 md:p-6 flex justify-center items-center rounded-lg gap-3 w-full cursor-pointer hover:bg-blue-200">
        <div className='p-3 bg-blue-50 rounded-full'>
        <GrArticle className="w-6 h-6 text-blue-700" />
        </div>
        <div className="gap-1.5">
          <h3 className="text-sm font-normal text-gray-500">Blogs Created</h3>
          <p className="text-xl text-cyan-950 text-semibold font-mono">{blogCount}</p>
        </div>
      </div>

      {/* Scholarship Overview Card */}
      <div className=" bg-white p-4 md:p-6 flex justify-center items-center rounded-lg gap-3 w-full hover:bg-blue-200 cursor-pointer">
        <div className='p-3 bg-blue-50 rounded-full'>
        <TbSchool className="w-6 h-6 text-blue-700" />
        </div>
        <div className="gap-1.5">
          <h3 className="text-sm font-normal text-gray-500">Programmes Created</h3>
          <p className="text-xl text-cyan-950 text-semibold font-mono">{programmeCount}</p>
        </div>
      </div>

      {/* Job Overview Card */}
      <div className=" bg-white p-4 md:p-6 flex justify-center items-center rounded-lg gap-3 w-full hover:bg-blue-200 cursor-pointer">
        <div className='p-3 bg-blue-50 rounded-full'>
        <HiOutlineBuildingOffice2 className="w-6 h-6 text-blue-700" />
        </div>
        <div className="gap-1.5">
          <h3 className="text-sm font-normal text-gray-500">Adverts Created</h3>
          <p className="text-xl text-cyan-950 text-semibold font-mono">{advertCount}</p>
        </div>
      </div>
     
    </div>
  );
};

export default OverviewCard;
