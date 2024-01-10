import React, {useState} from 'react';
import SignIn from '../components/Forms/SignIn';
import SignUp from '../components/Forms/SignUp';
import {FaInfoCircle} from 'react-icons/fa';
import Logo from '../assets/Logo.png'

function Index() {
    const [isSignUpButtonActive, setIsSignUpButton] = useState(true);

    const handleSignUpButton = () =>  {
       setIsSignUpButton(true);
       
    }
    const handleSignInButton = () => {
        setIsSignUpButton(false)
    }
    return (
        <div className='py-0.5 bg-gray-50 lg:py-2 min-h-screen'>
            <img src={Logo} alt="Wesc logo" className='w-32 lg:w-44' />
            <div className='max-w-2xl mx-auto text-center'>
            <h1 className='text-3xl font-bold leading-tight text-cyan-950 sm:text-4xl lg:text-5xl font-serif'>WESC ADMIN PORTAL</h1>
            <span className='text-gray-500 flex gap-1.5 items-center justify-center'>
                <FaInfoCircle/>
                <small className='text-md font-semibold '>This portal is to be accessed by admins only</small>
            </span>
            <div className='flex pt-4 justify-center  gap-3 text-2xl border-b-2 border-black/90 lg:w-2/5 w-3/4  mx-auto'>
                <div onClick={handleSignUpButton} className={`px-3 py-1.5 cursor-pointer ${isSignUpButtonActive ? 'bg-black text-gray-50': 'text-black'}`}>SignUp</div>
                <div onClick={handleSignInButton} className={`px-3 py-1.5 cursor-pointer ${isSignUpButtonActive ? 'text-black': 'bg-black text-gray-50'}`}>SignIn</div>
            </div>
            <div className=''>
                {isSignUpButtonActive ? <SignUp/> : <SignIn/>} 
            </div>
            </div>
        </div>
    );
}

export default Index;