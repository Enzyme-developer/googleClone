import React , { createContext , useContext , useReducer } from 'react'

//preparing the data layer
export const StateContext = createContext();


//higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Hook which allows us to pull information from the data
export const useStateValue = () => useContext(StateContext);