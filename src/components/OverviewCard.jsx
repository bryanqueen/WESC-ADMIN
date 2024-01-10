import React, { useState, useEffect } from 'react';
import {GrArticle} from 'react-icons/gr';
import {TbSchool} from 'react-icons/tb';
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'

const OverviewCard = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [scholarshipCount, setScholarshipCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);

  useEffect(() => {
    // Fetch data from the database to get the counts
    // Example: You might have API calls here to get the counts
    // For simplicity, using placeholder data
    setBlogCount(50); // Replace with actual data
    setScholarshipCount(10); // Replace with actual data
    setJobCount(20); // Replace with actual data
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
          <h3 className="text-sm font-normal text-gray-500">Scholarships Created</h3>
          <p className="text-xl text-cyan-950 text-semibold font-mono">{scholarshipCount}</p>
        </div>
      </div>

      {/* Job Overview Card */}
      <div className=" bg-white p-4 md:p-6 flex justify-center items-center rounded-lg gap-3 w-full hover:bg-blue-200 cursor-pointer">
        <div className='p-3 bg-blue-50 rounded-full'>
        <HiOutlineBuildingOffice2 className="w-6 h-6 text-blue-700" />
        </div>
        <div className="gap-1.5">
          <h3 className="text-sm font-normal text-gray-500">Jobs Created</h3>
          <p className="text-xl text-cyan-950 text-semibold font-mono">{jobCount}</p>
        </div>
      </div>
     
    </div>
  );
};

export default OverviewCard;
