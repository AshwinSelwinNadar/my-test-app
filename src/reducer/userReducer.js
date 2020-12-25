const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "GET_ALL_USERS":
            // console.log("GET_ALL_USERS: ", action.payload);
            return {
                ...state,
                getAllUsers: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;