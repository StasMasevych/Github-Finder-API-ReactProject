import { createContext, useReducer } from "react";

import alertReducer from './AlertReducer'


const AlerContext = createContext()

export const AlerProvider = ({children}) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    //set alert
    const setAlert = (msg, type) => {
      dispatch({type: 'SET_ALERT', payload: {msg, type}})

      setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000)
    }

    return (
        <AlerContext.Provider value={{
          alert: state,
          setAlert
        }}>
          {children}
        </AlerContext.Provider>
    )
}

export default AlerContext