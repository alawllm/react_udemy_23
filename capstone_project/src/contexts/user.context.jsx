import { createContext, useState, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

//actual component
//allowing child components to access the values inside of the useState
export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);

    const userReducer = (state, action) => {
        const { type, payload } = action;

        export const

        switch (type) {
            case 'SET_CURRENT_USER':
                return {
                    //taking values of the previous state object
                    //modifying everything that comes afterwards
                    ...state,
                    currentUser: payload
                }

            default:
                throw new Error(`Unhandled type ${type} in userReducer`)
        }
    }

    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

