
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const signApi = 'https://wesc-admin.com/v1/users/sign-in'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage);

  function getUserFromLocalStorage(){
    //Retrieve user data from localStorage if available
    const userData =  localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
  const signIn = async (formData) => {
    try {
        const response = await axios.post(signApi);

        //Save User data to localStorage
        localStorage.setItem('user', JSON.stringify(response.data));

        //Update state with the user data
    } catch (error) {
        console.error('Sign-in error', error)
        //Handle sign-in error, show a message, etc
    }
  };

  const signOut = () => {
    //Remove user data from localStorage
    localStorage.removeItem('user');

    //Clear the User State
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
