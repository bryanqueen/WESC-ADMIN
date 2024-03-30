import { FaEdit, FaTrash } from 'react-icons/fa';
const ProgramCard = ({
    programType,
    programName,
    tuitionFee,
    applicationFee,
    duration,
    appCode,
    location,
  }) => {
    return (
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-4 max-w-sm rounded-xl overflow-hidden shadow-lg">
          <div className="font-bold text-xl mb-2">{programType}</div>
          <div className="text-gray-700 text-base mb-2">{programName}</div>
  
          <div className="bg-white p-4 rounded-t-lg">
          <div className="text-gray-700 text-base">
            <span className="font-semibold ">Gross Tuition Fee:</span> <span className="text-black font-bold">${tuitionFee} CAD/Yr</span> 
          </div>
          <div className="text-gray-700 text-base">
            <span className="font-semibold">Application Fee:</span> <span className="text-black font-bold">${applicationFee} CAD</span> 
          </div>
          <div className="text-gray-700 text-base">
            <span className="font-semibold">Duration:</span> <span className='text-black font-bold'>{duration}</span>
          </div>
          <div className="text-gray-700 text-base">
            <span className="font-semibold">App Code:</span> <span className='text-black font-bold'>{appCode}</span>
          </div>
          <div className="text-gray-700 text-base">
            <span className="font-semibold">Location:</span> <span className='text-black font-bold'>{location}</span>
          </div>
          <div className="flex justify-between py-2">
            <button className='bg-black items-center justify-center p-1.5 rounded-md'>
                <FaEdit className='text-white h-4 w-4'/>
            </button>
            <button className='bg-red-600 items-center justify-center p-1.5 rounded-md'>
                <FaTrash className='text-white h-4 w-4'/>
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgramCard;
  