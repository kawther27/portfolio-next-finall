// store/reducers/authReducer.js
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT
  } from '../actions/authActions';
  
  const initialState = {
    users: [], // Stocker les utilisateurs enregistrés
    currentUser: null,
    loading: false,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
      case LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
      case REGISTER_SUCCESS:
        return { ...state, loading: false, users: [...state.users, action.payload] };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, currentUser: action.payload };
      case REGISTER_FAILURE:
      case LOGIN_FAILURE:
        return { ...state, loading: false, error: action.error };
      case LOGOUT:
        return { ...state, currentUser: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  