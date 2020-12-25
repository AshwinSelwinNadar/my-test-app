const accountReducer = (state = {}, action) => {
    switch(action.type) {
        case "GET_ALL_ACCOUNTS":
            // console.log("GET_ALL_ACCOUNTS: ", action.payload);
            return {
                ...state,
                getAllAccounts: action.payload
            } 
        default:
            return state;
    }
};

export default accountReducer;