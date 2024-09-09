import searchReducer from "./searchReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    searchReducer,
    // add one by one
});

export default rootReducer;