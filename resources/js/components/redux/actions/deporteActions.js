import { FETCH_DEPORTES, FETCH_DEPORTES_SUCCESS, FETCH_DEPORTES_FAILURE, EMPTY_DEPORTE,
CREAR_DEPORTE, CREAR_DEPORTE_SUCCESS, CREAR_DEPORTE_FAILURE,
EDITAR_DEPORTE, EDITAR_DEPORTE_SUCCESS, EDITAR_DEPORTE_FAILURE,
ELIMINAR_DEPORTE, ELIMINAR_DEPORTE_SUCCESS, ELIMINAR_DEPORTE_FAILURE,
GET_DEPORTE, GET_DEPORTE_SUCCESS, GET_DEPORTE_FAILURE } from './types';
import axios from 'axios';

export const fetchDeportes = () => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: FETCH_DEPORTES });
  axios.get("http://localhost/api/deportes")
    .then(results => {
        console.log(results)
        dispatch({
            type: FETCH_DEPORTES_SUCCESS,
            payload: results.data
        })
      }
    )
    .catch(error => 
    {
      console.log(error);
      dispatch({ 
        type: FETCH_DEPORTES_FAILURE,  
        payload: error
      }); 
    })
    
}

export const emptyDeporte = () => dispatch => {
  dispatch({ type: EMPTY_DEPORTE })
}

export const crearDeporte = (obj) => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: CREAR_DEPORTE });
  axios
      .post('http://localhost/api/deportes', obj)
      .then(results => {
        dispatch({
            type: CREAR_DEPORTE_SUCCESS,
            payload: results.data
        })
      })
      .catch(error => 
      {
        console.log(error);
        dispatch({ 
          type: CREAR_DEPORTE_FAILURE,  
          payload: error
        }); 
      });
}

export const editarDeporte = (obj) => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: EDITAR_DEPORTE });
  axios
      .put(`http://localhost/api/deportes/${obj.id}`, obj)
      .then(results => {
        dispatch({
            type: EDITAR_DEPORTE_SUCCESS,
            payload: results.data
        })
      })
      .catch(error => 
      {
        console.log(error);
        dispatch({ 
          type: EDITAR_DEPORTE_FAILURE,  
          payload: error
        }); 
      });       
}

export const eliminarDeporte = (deporteId) => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: ELIMINAR_DEPORTE });
  axios
      .delete(`http://localhost/api/deportes/${deporteId}`)
      .then(results => {
        dispatch({
            type: ELIMINAR_DEPORTE_SUCCESS
        })
      })
      .catch(error => 
      {
        console.log(error);
        dispatch({ 
          type: ELIMINAR_DEPORTE_FAILURE,  
          payload: error
        }); 
      });       
}

export const getDeporte = (deporteId) => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: GET_DEPORTE });
  axios
      .get(`http://localhost/api/deportes/${deporteId}`)
      .then(results => {
        dispatch({
            type: GET_DEPORTE_SUCCESS,
            payload: results.data
        })
      })
      .catch(error => 
      {
        console.log(error);
        dispatch({ 
          type: GET_DEPORTE_FAILURE,  
          payload: error
        }); 
      });       
}