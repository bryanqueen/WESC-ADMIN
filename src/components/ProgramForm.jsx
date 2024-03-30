import {useState, useEffect} from 'react';
import axios from 'axios';

const apiPath = 'https://fair-gold-termite-sock.cyclic.app/api/v1/'

export function ProgramForm({ initialData}) {
    const [formData, setFormData] = useState({
        programType: '',
        programName: '',
        tuitionFee: '',
        applicationFee: '',
        duration: '',
        appCode: '',
        location: ''
    });

    useEffect(() => {
        if(initialData){
            setFormData(initialData)
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post(`${apiPath}programmes`, formData)
        console.log(response.data)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 md:gap-y-4">
                            <div>
                                <label htmlFor="programType" className="text-base font-medium text-gray-900"> Program Type </label>
                                <div className="mt-2.5 relative">
                                    <input type="text" 
                                        name="programType"
                                        placeholder="Enter Program Type" 
                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 "
                                        onChange={handleChange}
                                        value={formData.programType}
                                     />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="programName" className="text-base font-medium text-gray-900"> Program Name</label>
                                <div className="mt-2.5 relative">
                                    <input type="text" 
                                        name="programName" 
                                        placeholder="Enter Program Name" 
                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 "
                                        onChange={handleChange}
                                        value={formData.programName}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="tuitionFee" className="text-base font-medium text-gray-900"> Tuition Fee </label>
                                <div className="mt-2.5 relative">
                                    <input
                                     type="text" 
                                     name="tuitionFee"
                                     placeholder="Enter Tuition Fee" 
                                     className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 "
                                     onChange={handleChange}
                                     value={formData.tuitionFee}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="applicationFee" className="text-base font-medium text-gray-900"> Application Fee </label>
                                <div className="mt-2.5 relative">
                                    <input
                                     type="text" 
                                     name="applicationFee" 
                                     placeholder="Enter Application Fee" 
                                     className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 "
                                     onChange={handleChange}
                                     value={formData.applicationFee}
                                    />
                                </div>
                            </div>

                           

                            <div>
                                <label htmlFor="duration" className="text-base font-medium text-gray-900"> Duration </label>
                                <div className="mt-2.5 relative">
                                    <input
                                     type="text"
                                     name="" 
                                     id="" 
                                     placeholder="Enter Duration" 
                                     className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 " 
                                     onChange={handleChange}
                                     value={formData.duration}
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Application Code </label>
                                <div className="mt-2.5 relative">
                                    <input
                                     type="text" 
                                     name="appCode"
                                     placeholder="Enter Application Code" 
                                     className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 "
                                     onChange={handleChange}
                                    value={formData.appCode}
                                    />
                            </div>
                            </div>
                             
                            <div className='sm:col-span-2'>
                            <label htmlFor="location" className="text-base font-medium text-gray-900"> Location </label>
                                <div className="mt-2.5 relative">
                                    <input
                                     type="text" 
                                     name="location"
                                     placeholder="Enter Location" 
                                     className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-Gray rounded-md focus:outline-none focus:border-blue-600 " 
                                     onChange={handleChange}
                                     value={formData.location}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none bg-black ">
                                    Submit
                                </button>
                            </div>
                        </div>
                        
                    </form>
    )
}