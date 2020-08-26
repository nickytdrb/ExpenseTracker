import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
          { id: 1, text: 'Rent', amount: -200 },
          { id: 2, text: 'Salary', amount: 800 },
          { id: 3, text: 'Gym', amount: -100 },
          { id: 4, text: 'Books', amount: -40 }
        ]
}

// Global context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
    }}>
    {children}
    </GlobalContext.Provider>
    );
}
