import React, {useState, useEffect} from 'react'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { crearDeporte, editarDeporte } from '../redux/actions/deporteActions'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
  }),
}

export default ({saveDeporte, deporteEdit}) => {
  const dispatch = useDispatch()

  const [nombre, setNombre] = useState(deporteEdit.nombre || '')
  
  const deporte = useSelector((state)=>state.deporte.item.item)

  useEffect(()=>{
    if(deporte!=null){
        saveDeporte(true)
    }
  },[deporte, deporteEdit])

  useEffect(()=>{
    setNombre(deporteEdit.nombre || '')
  },[deporteEdit])

  const _handleSubmit = (e) =>{
    e.preventDefault()
    const obj = {
      nombre
    }
    if(deporteEdit.id){
      obj.id = deporteEdit.id
      dispatch(editarDeporte(obj))
    }else{
      dispatch(crearDeporte(obj))
    }
  }
  
  const _handleCancelar = () => {
    saveDeporte(false)
  }

  return (
      <div className="col-12">
        <form
          onSubmit={(e)=>_handleSubmit(e)} 
          className="col-sm-6 mx-auto mb-4">
          <div className="form-group">
            <label htmlFor="nombre_id">Nombre del Deporte</label>
            <input 
              type="text" 
              className="form-control" 
              onChange={(e)=>setNombre(e.target.value)}
              id="nombre_id"
              value = {nombre}
              placeholder="Ingrese Nombre"
            />
          </div>
          <div className="text-right">
            <button type="button" className="btn btn-secondary" onClick={_handleCancelar}>Cancelar</button>
            <button type="submit" className="btn btn-success ml-2">Guardar</button>
          </div>
        </form>
      </div>
    )
  
}
