import { FETCH_COMPLEJOS, FETCH_COMPLEJOS_SUCCESS, FETCH_COMPLEJOS_FAILURE, EMPTY_COMPLEJO,
CREAR_COMPLEJO, CREAR_COMPLEJO_SUCCESS, CREAR_COMPLEJO_FAILURE,
EDITAR_COMPLEJO, EDITAR_COMPLEJO_SUCCESS, EDITAR_COMPLEJO_FAILURE,
ELIMINAR_COMPLEJO, ELIMINAR_COMPLEJO_SUCCESS, ELIMINAR_COMPLEJO_FAILURE,
GET_COMPLEJO, GET_COMPLEJO_SUCCESS, GET_COMPLEJO_FAILURE } from './types';
import axios from 'axios';

export const fetchComplejos = () => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: FETCH_COMPLEJOS });
  axios.get("http://localhost/api/complejos")
    .then(results => {
        console.log(results)
        dispatch({
            type: FETCH_COMPLEJOS_SUCCESS,
            payload: results.data
        })
      }
    )
    .catch(error => 
    {
      console.log(error);
      dispatch({ 
        type: FETCH_COMPLEJOS_FAILURE,  
        payload: error
      }); 
    })
    
}

export const emptyComplejo = () => dispatch => {
  dispatch({ type: EMPTY_COMPLEJO })
}

export const crearComplejo = (obj) => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: CREAR_COMPLEJO });
  axios
      .post('http://localhost/api/complejos', obj)
      .then(results => {
        dispatch({
            type: CREAR_COMPLEJO_SUCCESS,
            payload: results.data
        })
      })
      .catch(error => 
      {
        console.log(error);
        dispatch({ 
          type: CREAR_COMPLEJO_FAILURE,  
          payload: error
        }); 
      });
}

export const editarComplejo = (obj) => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: EDITAR_COMPLEJO });
  axios
      .put(`http://localhost/api/complejos/${obj.id}`, obj)
      .then(results => {
        dispatch({
            type: EDITAR_COMPLEJO_SUCCESS,
            payload: results.data
        })
      })
      .catch(error => 
      {
        console.log(error);
        dispatch({ 
          type: EDITAR_COMPLEJO_FAILURE,  
          payload: error
        }); 
      });       
}

export const eliminarComplejo = (complejoId) => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: ELIMINAR_COMPLEJO });
  axios
      .delete(`http://localhost/api/complejos/${complejoId}`)
      .then(results => {
        dispatch({
            type: ELIMINAR_COMPLEJO_SUCCESS
        })
      })
      .catch(error => 
      {
        console.log(error);
        dispatch({ 
          type: ELIMINAR_COMPLEJO_FAILURE,  
          payload: error
        }); 
      });       
}

export const getComplejo = (complejoId) => dispatch => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch({ type: GET_COMPLEJO });
  axios
      .get(`http://localhost/api/complejos/${complejoId}`)
      .then(results => {
        dispatch({
            type: GET_COMPLEJO_SUCCESS,
            payload: results.data
        })
      })
      .catch(error => 
      {
        console.log(error);
        dispatch({ 
          type: GET_COMPLEJO_FAILURE,  
          payload: error
        }); 
      });       
}