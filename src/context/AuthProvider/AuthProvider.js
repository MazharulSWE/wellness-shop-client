import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';


export const AuthContext = createContext();  // export for using in useAuth

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;