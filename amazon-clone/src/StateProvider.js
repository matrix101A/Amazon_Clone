import React, { createContext, useContext, useReducer } from "react";
// prepared the dataLayer
export const StateContext = createContext();
//Wrap our app and provide datalayer to every conponent
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pool information from data layer
export const useStateValue = () => useContext(StateContext);
