import { FETCH_COMPLEJOS, FETCH_COMPLEJOS_SUCCESS, FETCH_COMPLEJOS_FAILURE, EMPTY_COMPLEJO,
CREAR_COMPLEJO, CREAR_COMPLEJO_SUCCESS, CREAR_COMPLEJO_FAILURE,
EDITAR_COMPLEJO, EDITAR_COMPLEJO_SUCCESS, EDITAR_COMPLEJO_FAILURE,
ELIMINAR_COMPLEJO, ELIMINAR_COMPLEJO_SUCCESS, ELIMINAR_COMPLEJO_FAILURE,
GET_COMPLEJO, GET_COMPLEJO_SUCCESS, GET_COMPLEJO_FAILURE } from '../actions/types';

const initialState = {
    items: { items: [], error: null, loading: false },
    item: { item: null, error: null, loading: false },
    eliminar: false
};
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_COMPLEJOS:
            return { 
                ...state, 
                items: { items:state.items.items, error:null, loading: true}
            }
        case FETCH_COMPLEJOS_SUCCESS:
            return {
                ...state, 
                items: { items:action.payload, error:null, loading: false}
            }
        case FETCH_COMPLEJOS_FAILURE:
            return { 
                ...state, 
                items: { item:state.items.items, error:action.payload, loading: false}, 
            }
        case EMPTY_COMPLEJO:
            return {
                ...state, 
                item: {item: null, error:null, loading: false},
                eliminar: false
            }
        case CREAR_COMPLEJO:
            return { 
                ...state, 
                item: { item:null, error:null, loading: true}, 
            }
        case CREAR_COMPLEJO_SUCCESS:
            return { 
                ...state, 
                item: { item:action.payload, error:null, loading: false}, 
            }
        case CREAR_COMPLEJO_FAILURE:
            return { 
                        ...state, 
                        item: { item:null, error:action.payload, loading: false}, 
                    }
        case EDITAR_COMPLEJO:
            return { 
                        ...state, 
                        item: { item:null, error:null, loading: true}, 
                    }
        case EDITAR_COMPLEJO_SUCCESS:
            return { 
                        ...state, 
                        item: { item:action.payload, error:null, loading: false}, 
                    }
        case EDITAR_COMPLEJO_FAILURE:
            return { 
                        ...state, 
                        item: { item:null, error:action.payload, loading: false}, 
                    }
        case ELIMINAR_COMPLEJO:
            return { 
                ...state, 
                item: { item:null, error:null, loading: true}, 
                eliminar:false
            }
        case ELIMINAR_COMPLEJO_SUCCESS:
            return { 
                ...state, 
                item: { item:state.item.item, error:null, loading: false}, 
                eliminar:true
            }
        case ELIMINAR_COMPLEJO_FAILURE:
            return { 
                ...state,
                item: {item:null, error:action.payload, loading: false},
                eliminar:false
            }
        case GET_COMPLEJO:
            return { 
                ...state, 
                item: { item:null, error:null, loading: true}, 
            }
        case GET_COMPLEJO_SUCCESS:
            return { 
                ...state, 
                item: { item:action.payload, error:null, loading: false}, 
            }
        case GET_COMPLEJO_FAILURE:
            return { 
                ...state,
                item: {item:null, error:action.payload, loading: false}
            }
        default:
            return state
    }
}