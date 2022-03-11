import { createContext, useReducer } from "react";
import transReducer from "./transReducer";


const initialData = {
    transactions: [],
}


let myContext = createContext(initialData);

export const TransactionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(transReducer, initialData);
    
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    };

    function deleteList(transaction){
        dispatch({
            type:'DELETE_LIST',
            payload:transaction,
        })
    }
    return (
        <myContext.Provider value={{

            transaction:state.transactions,
            addTransaction,
            deleteList,
        }
        }>
            {children}
        </myContext.Provider>
    )
}


export default myContext;