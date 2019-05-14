import {combineReducers} from 'redux';
import userEventReducer from './userEventReducer';

const rootReducer =  combineReducers({
    gitHubReducer: userEventReducer
});

export default rootReducer;