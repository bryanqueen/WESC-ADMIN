
import React from 'react';
import Overview from './dashComps/Overview';
import Blogs from './dashComps/Blogs';
import Programmes from './dashComps/Programmes';
import Adverts from './dashComps/Adverts';
import Profile from './dashComps/Profile';

const DashCompCover = ({ selectedMenuItem }) => {
  return (
    <div className="flex-1 p-4 lg:p-8 ">
      {selectedMenuItem === 'Overview' && <Overview />}
      {selectedMenuItem === 'Blogs' && <Blogs />}
      {selectedMenuItem === 'Programmes' && <Programmes />}
      {selectedMenuItem === 'Adverts' && <Adverts />}
      {selectedMenuItem === 'Profile' && <Profile />}
    </div>
  );
};

export default DashCompCover;
