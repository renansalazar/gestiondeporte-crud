import { FETCH_LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
CREAR_USUARIO, CREAR_USUARIO_SUCCESS, CREAR_USUARIO_FAILURE,EMPTY_USUARIO } from '../actions/types';


const initialState = {
    user: null,
    loading: false,
    autenticado: true,
    error: null
};

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_LOGIN_LOADING:
            return {...state, user:null, error:null, loading: true, autenticado:false}
        case LOGIN_SUCCESS:
            return {...state, user:null, error:null, loading: false, autenticado:true}
        case LOGIN_FAILURE:
            return {...state, user:null, error: "No coincide Usuario y/o Contraseña", loading: false, autenticado:true}
        case LOGOUT_SUCCESS:
            return {...state, user:null, error: null, loading:false, autenticado:false}
        case EMPTY_USUARIO:
            return {
                ...state, user:null, error: null
            }
        case CREAR_USUARIO:
            return { 
                ...state, user:null , error: null
            }
        case CREAR_USUARIO_SUCCESS:
            return { 
                ...state, user:"usuario creado", error: null
            }
        case CREAR_USUARIO_FAILURE:
            return { 
                ...state, user:null, error: "Datos invalidos"
            }
        default:
            return state
    }
}