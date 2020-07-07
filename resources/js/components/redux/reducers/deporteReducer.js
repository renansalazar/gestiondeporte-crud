import { FETCH_DEPORTES, FETCH_DEPORTES_SUCCESS, FETCH_DEPORTES_FAILURE, EMPTY_DEPORTE,
CREAR_DEPORTE, CREAR_DEPORTE_SUCCESS, CREAR_DEPORTE_FAILURE,
EDITAR_DEPORTE, EDITAR_DEPORTE_SUCCESS, EDITAR_DEPORTE_FAILURE,
ELIMINAR_DEPORTE, ELIMINAR_DEPORTE_SUCCESS, ELIMINAR_DEPORTE_FAILURE,
GET_DEPORTE, GET_DEPORTE_SUCCESS, GET_DEPORTE_FAILURE } from '../actions/types';

const initialState = {
    items: { items: [], error: null, loading: false },
    item: { item: null, error: null, loading: false },
    eliminar: false
};
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_DEPORTES:
            return { 
                ...state, 
                items: { items:state.items.items, error:null, loading: true}
            }
        case FETCH_DEPORTES_SUCCESS:
            return {
                ...state, 
                items: { items:action.payload, error:null, loading: false}
            }
        case FETCH_DEPORTES_FAILURE:
            return { 
                ...state, 
                items: { item:state.items.items, error:action.payload, loading: false}, 
            }
        case EMPTY_DEPORTE:
            return {
                ...state, 
                item: {item: null, error:null, loading: false},
                eliminar: false
            }
        case CREAR_DEPORTE:
            return { 
                ...state, 
                item: { item:null, error:null, loading: true}, 
            }
        case CREAR_DEPORTE_SUCCESS:
            return { 
                ...state, 
                item: { item:action.payload, error:null, loading: false}, 
            }
        case CREAR_DEPORTE_FAILURE:
            return { 
                        ...state, 
                        item: { item:null, error:action.payload, loading: false}, 
                    }
        case EDITAR_DEPORTE:
            return { 
                        ...state, 
                        item: { item:null, error:null, loading: true}, 
                    }
        case EDITAR_DEPORTE_SUCCESS:
            return { 
                        ...state, 
                        item: { item:action.payload, error:null, loading: false}, 
                    }
        case EDITAR_DEPORTE_FAILURE:
            return { 
                        ...state, 
                        item: { item:null, error:action.payload, loading: false}, 
                    }
        case ELIMINAR_DEPORTE:
            return { 
                ...state, 
                item: { item:null, error:null, loading: true}, 
                eliminar:false
            }
        case ELIMINAR_DEPORTE_SUCCESS:
            return { 
                ...state, 
                item: { item:state.item.item, error:null, loading: false}, 
                eliminar:true
            }
        case ELIMINAR_DEPORTE_FAILURE:
            return { 
                ...state,
                item: {item:null, error:action.payload, loading: false},
                eliminar:false
            }
        case GET_DEPORTE:
            return { 
                ...state, 
                item: { item:null, error:null, loading: true}, 
            }
        case GET_DEPORTE_SUCCESS:
            return { 
                ...state, 
                item: { item:action.payload, error:null, loading: false}, 
            }
        case GET_DEPORTE_FAILURE:
            return { 
                ...state,
                item: {item:null, error:action.payload, loading: false}
            }
        default:
            return state
    }
}