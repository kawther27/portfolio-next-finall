// store/actions/authActions.js

// Types d'action
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

// Action pour enregistrer un utilisateur
export const registerUser = (username, email, password) => async dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    // Ici, nous simulons un enregistrement utilisateur
    const user = { username, email, password };
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, error: 'Échec de l\'inscription' });
  }
};

// Action pour connecter un utilisateur
export const loginUser = (email, password) => async (dispatch, getState) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { users } = getState().auth;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } else {
      throw new Error('Utilisateur non trouvé');
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: 'Utilisateur non trouvé ou mot de passe incorrect' });
  }
};

// Action pour déconnecter un utilisateur
export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT });
};
