
import React from 'react';
import Overview from './dashComps/Overview';
import Blogs from './dashComps/Blogs';
import Scholarships from './dashComps/Scholarships';
import Jobs from './dashComps/Jobs';
import Profile from './dashComps/Profile';

const DashCompCover = ({ selectedMenuItem }) => {
  return (
    <div className="flex-1 p-4 lg:p-8 ">
      {selectedMenuItem === 'Overview' && <Overview />}
      {selectedMenuItem === 'Blogs' && <Blogs />}
      {selectedMenuItem === 'Scholarships' && <Scholarships />}
      {selectedMenuItem === 'Jobs' && <Jobs />}
      {selectedMenuItem === 'Profile' && <Profile />}
    </div>
  );
};

export default DashCompCover;
