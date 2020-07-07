import { combineReducers } from  'redux';

import authReducer from './authReducer';
import complejoReducer from './complejoReducer';
import deporteReducer from './deporteReducer';

export default combineReducers({
    auth: authReducer,
    complejo: complejoReducer,
    deporte: deporteReducer,
})