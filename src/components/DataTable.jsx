// src/components/Table.js
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {CiMenuKebab} from 'react-icons/ci'

const DataTable = ({ data, onEdit, onDelete }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        // Handle the case when data is not available or not an array
        return null
      } 
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-right  font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            console.log(typeof(data)),
            <tr key={item.id} >
              <td className="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-36 md:max-w-md lg:max-w-lg xl:max-w-2xl text-gray-700 text-sm font-semibold ">
                {item.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap ">
                <div className="flex items-center justify-end">
                  {/* Edit Button */}
                  <button
                    className="hidden md:inline-flex items-center px-2 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => onEdit(item.id)}
                  >
                    <FaEdit className="mr-2" />
                    Edit
                  </button>

                  {/* Delete Button */}
                  <button
                    className="hidden md:inline-flex ml-2 items-center px-2 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                    onClick={() => onDelete(item.id)}
                  >
                    <FaTrash className="mr-2" />
                    Delete
                  </button>

                  {/* Overflow Menu for Small Screens */}
                  <div className="md:hidden relative ml-2">
                    <button className="inline-flex items-center text-gray-700 focus:outline-none  ">
                        <CiMenuKebab/>
                    </button>
                    <div className="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => onEdit(item.id)}
                      >
                        <FaEdit className="mr-2" />
                        Edit
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:text-red-900"
                        onClick={() => onDelete(item.id)}
                      >
                        <FaTrash className="mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
