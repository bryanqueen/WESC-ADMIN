import {useState} from 'react';
import {GrArticle, GrPieChart} from 'react-icons/gr';
import {TbSchool} from 'react-icons/tb';
import {HiOutlineBuildingOffice2} from 'react-icons/hi2';
import { FaRegUser } from "react-icons/fa6";
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/Logo.jpeg';





export default function Sidebar({onMenuClick, selectedMenuItem}){

  const {logout} = useAuth();

  const handleLogout = () => {
    logout()
  }

    const sideBarItems = [
        {
          icon: <GrPieChart/>,
          name: 'Overview'
        },
        {
            icon: <GrArticle/>,
            name: 'Blogs',
        },
        {
            icon: <TbSchool/>,
            name: 'Programmes',
        },
        {
            icon: <HiOutlineBuildingOffice2/>,
            name: 'Adverts',
        },
        {
            icon: <FaRegUser/>,
            name: 'Profile',

        }
    ]
    return (
        <div className="flex w-16 flex-col justify-between border-e bg-white min-h-screen">
  <div>
    <div className="inline-flex h-16 w-16 items-center justify-center">
        <img src={Logo} alt="" className='contain w-12 rounded-lg' />
    </div>

    <div className="border-t border-gray-100">
      <div className="px-2">
        <ul className="space-y-1 border-t border-gray-100 pt-4">
            {sideBarItems.map((menu, idx) => (
          <li
          key={idx}
          className={`t group relative flex justify-center rounded px-2 py-1.5 ${
            selectedMenuItem === menu.name ? 'text-blue-700 bg-blue-50' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
          }`}
          onClick={() => onMenuClick(menu.name)}
        >
          {menu.icon}
          <span
            className="hidden lg:flex absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
          >
            {menu.name}
          </span>
        </li>
            ))}         
        </ul>
      </div>
    </div>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
    
      <button
        type="submit"
        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        onClick={handleLogout}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>

        <span
          className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
        >
          Logout
        </span>
      </button>
    
  </div>
</div>
    )
}