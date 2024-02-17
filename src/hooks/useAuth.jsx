import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalstorage } from "./useLocalStorage";


//Create a new auth context
const AuthContext = createContext();

//Create AuthProvider
export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalstorage('user', null);
    const navigate = useNavigate();

    //This Function should be called when user is to be authenticated.
    const login = async (data) => {
        setUser(data)
        navigate('/dashboard')
    }

    //This Function is to be called to log user out
    const logout = () => {
        setUser(null);
        navigate('/', {replace: true});
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () => {
    return useContext(AuthContext)
}
