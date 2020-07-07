import { FETCH_LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
CREAR_USUARIO, CREAR_USUARIO_SUCCESS, CREAR_USUARIO_FAILURE,EMPTY_USUARIO } from './types';
import axios from 'axios';

export const loginRequest = (email, password) => dispatch => {
  
  dispatch({ type: FETCH_LOGIN_LOADING });
  axios
      .post('http://localhost/api/auth/login', {email: email, password: password})
      .then(results => {
        console.log(results.data.access_token); 
        let token = results.data.access_token
        localStorage.setItem("token", token);
        dispatch({
            type: LOGIN_SUCCESS,
        })
      })
      .catch(error => 
        {
          console.log(error); 
          dispatch({ type: LOGIN_FAILURE, payload: error })
        }
      );
}

export const logoutRequest = () => dispatch => {
  axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem("token");
  localStorage.removeItem("token");
  axios
      .get('http://localhost/api/auth/logout')
      .then(results => {
        dispatch({ type: LOGOUT_SUCCESS });
      })
      .catch(error => 
      {
        dispatch({ type: LOGIN_FAILURE, payload: error })
      }
      );
}

export const crearUsuario = (name, email, password) => dispatch => {
  dispatch({ type: CREAR_USUARIO });
  axios
      .post('http://localhost/api/auth/register',{name: name, email: email, password: password})
      .then(results => {
        dispatch({ type: CREAR_USUARIO_SUCCESS });
      })
      .catch(error => 
      {
        dispatch({ type: CREAR_USUARIO_FAILURE, payload: error })
      }
      );
}

export const emptyUsuario = () => dispatch => {
  dispatch({ type: EMPTY_USUARIO })
}