import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../config/firebase";
import Suspence from "../Components/Suspence";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    onAuthStateChanged(auth, user  =>{
        setUser(user);
        setLoading(false);
    });
      
    }, []);
    if (loading){
        return <Suspence/>;
    }
    
    return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
};
export default AuthProvider;