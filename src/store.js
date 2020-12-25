import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

function configureStore(
    state: {
        userState: {}
    }
) {
    return createStore(
        rootReducer,
        state,
        applyMiddleware(
            reduxThunk
        )
    );
}

export default configureStore;