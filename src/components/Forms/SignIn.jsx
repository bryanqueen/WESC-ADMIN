import React, {useState} from 'react';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';

const apiPath = 'https://fair-gold-termite-sock.cyclic.app/api/v1/'


function SignIn(props) {
    const {login} = useAuth();
    
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }


    const handleSubmit = async (e) => {
       try {
        e.preventDefault();
        const response = await axios.post(`${apiPath}/signin`, formData);
        console.log(response.status)
       } catch (error) {
        console.error('An error occured', error)
       }
    }
    return (
        <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 max-w-md mx-auto">
        <p className="text-center text-lg font-medium">If you already have an account</p>
  
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
  
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="email"
              name='email'
              onChange={handleChange}
              value={formData.email}
            />
  
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
  
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
  
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="password"
              name='password'
              onChange={handleChange}
              value={formData.password}
            />
  
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
  
        
  
        <button
          type="submit"
          className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
  
       
      </form>
    );
}

export default SignIn;