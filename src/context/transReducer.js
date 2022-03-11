 

export default (state, action) => {
    switch(action.type) {
        case 'DELETE_LIST':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    };
}