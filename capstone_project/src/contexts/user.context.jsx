import { createContext, useState } from 'react';

//the actual value you want to access
//passing in the default value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//actual component
//allowing child components to access the values inside of the useState
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

