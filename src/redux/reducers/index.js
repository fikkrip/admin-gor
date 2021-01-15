import { combineReducers } from 'redux';
import auth from "./auth";
import loader from "./loader"
import dashboard from "./dashboard";

const rootReducer = combineReducers({
    auth,
    dashboard,
    loader,
});

export default rootReducer;
