import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashCompCover from '../components/dashCompCover';

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Overview');

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <Sidebar onMenuClick={handleMenuClick} selectedMenuItem={selectedMenuItem} />
      <DashCompCover selectedMenuItem={selectedMenuItem} />
    </div>
  );
};

export default Dashboard;