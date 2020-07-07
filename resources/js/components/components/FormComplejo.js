import React, {useState, useEffect} from 'react'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { crearComplejo, editarComplejo } from '../redux/actions/complejoActions'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
  }),
}

export default ({saveComplejo, complejoEdit}) => {
  const dispatch = useDispatch()

  const [tipo, setTipo] = useState(complejoEdit.tipo || 'deportivo')
  const [jefe, setJefe] = useState(complejoEdit.jefe || '')
  const [area, setArea] = useState(complejoEdit.area || '')
  const [presupuesto, setPresupuesto] = useState(complejoEdit.presupuesto || '')
  
  const complejo = useSelector((state)=>state.complejo.item.item)

  useEffect(()=>{
    if(complejo!=null){
        saveComplejo(true)
    }
  },[complejo, complejoEdit])

  useEffect(()=>{
    setTipo(complejoEdit.tipo || 'deportivo')
    setJefe(complejoEdit.jefe || '')
    setArea(complejoEdit.area || '')
    setPresupuesto(complejoEdit.presupuesto || '')
  },[complejoEdit])

  const _handleSubmit = (e) =>{
    e.preventDefault()
    const obj = {
      tipo,
      jefe,
      area,
      presupuesto,
    }
    if(complejoEdit.id){
      obj.id = complejoEdit.id
      dispatch(editarComplejo(obj))
    }else{
      dispatch(crearComplejo(obj))
    }
  }
  
  const _handleCancelar = () => {
    saveComplejo(false)
  }

  return (
      <div className="col-12">
        <form
          onSubmit={(e)=>_handleSubmit(e)} 
          className="col-sm-6 mx-auto mb-4">
          <div className="form-row">
            <div className="form-group col-sm-4">
              <label htmlFor="tipo_id">Tipo de Complejo</label>
              <Select
                defaultValue={{ label: tipo, value: tipo }}
                id="tipo_id"
                placeholder='Seleccione'
                onChange={(e)=>setTipo(e.value)}
                styles={customStyles}
                options={[{value: "deportivo", label: "deportivo"}, {value: "polideportivo", label: "polideportivo"}]}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="jefe_id">Jefe de Organizacion</label>
            <input 
              type="text" 
              className="form-control" 
              onChange={(e)=>setJefe(e.target.value)}
              id="jefe_id"
              value = {jefe}
              placeholder="Ingrese Nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="area_id">Area Total</label>
            <input
              id="area_id"
              className="form-control" 
              type="text"
              placeholder='Ingrese Area'
              value = {area}
              onChange={(e)=>setArea(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="presupuesto_id">Presupuesto</label>
              <input 
                id="presupuesto_id"
                type="number" 
                className="form-control quantity-field" 
                onChange={(e)=>setPresupuesto(e.target.value)}
                value={presupuesto}
              />
            </div>
          </div>
          <div className="text-right">
            <button type="button" className="btn btn-secondary" onClick={_handleCancelar}>Cancelar</button>
            <button type="submit" className="btn btn-success ml-2">Guardar</button>
          </div>
        </form>
      </div>
    )
  
}
