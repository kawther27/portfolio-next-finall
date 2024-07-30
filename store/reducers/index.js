import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
 
});

export default rootReducer;
