import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {useSelector, useDispatch} from 'react-redux'
import swal from '@sweetalert/with-react'

import {fetchDeportes, emptyDeporte, eliminarDeporte} from '../redux/actions/deporteActions'
import Titulo from '../components/Titulo';
import Mensaje from '../components/Mensaje';
import Iconos from '../components/Iconos';
import FormDeporte from '../components/FormDeporte'

const columnsTable = [
        {
          title: 'Nombre de Deporte',
          field: 'nombre'
        },
    ]
export default () => {
  const dispatch = useDispatch()
  const [formulario,setFormulario] = useState(false)
  const [mensaje,setMensaje] = useState(false)
  const [mensajeTexto,setMensajeTexto] = useState("")
  const [mensajeTipo,setMensajeTipo] = useState("")
  const [deporte, setDeporte] = useState({})
  const deportes = useSelector((state)=>state.deporte.items.items)
  const eliminar = useSelector((state)=>state.deporte.eliminar)
  const error = useSelector((state)=>state.deporte.item.error)

  useEffect(()=>{
    dispatch(fetchDeportes())
  },[])

  useEffect(()=>{
    if(error!=null){
      setMensajeTexto(error.message || JSON.stringify(error))
      setMensajeTipo("danger")
      setMensaje(true)
    }

    if(eliminar){
      dispatch(fetchDeportes())
      dispatch(emptyDeporte())
      setMensajeTexto("Se eliminó correctamente!")
      setMensajeTipo("success")
      setMensaje(true)
    }
  },[eliminar, error])

  const _handleOpen = () => {
    dispatch(emptyDeporte())
    setDeporte({})
    setFormulario(true)
    window.scrollTo(0, 0)
  }

  const saveDeporte = (res) => {
    setFormulario(false)
    dispatch(fetchDeportes())
    if(res){
      setMensajeTexto("Se guardo correctamente!")
      setMensajeTipo("success")
      setMensaje(true)
    }
  }

  const _handleEdit = (rowData) => {
    dispatch(emptyDeporte())
    setDeporte(rowData)
    setFormulario(true)
    window.scrollTo(0, 0)
  }

  const _handleDelete = (rowData) => {
    swal({
      text: "¿Estas seguro de eliminar este deporte?",
      icon: "error",
      buttons: {
        confirm: "Sí",
        cancel: "No",
      },
    }).then((confirm) => {
      if (confirm) {
        dispatch(eliminarDeporte(rowData.id))
      } else {

      }
    })
  }
  
  const cerrarMensaje = () => {
    setMensaje(false)
  }

  return (
    <div>
      <Titulo titulo="CRUD de Deportes" />
      {
        mensaje?
          <Mensaje close={cerrarMensaje} mensaje={mensajeTexto} tipo={mensajeTipo}/>
        :
          <br/>
      }
            
      <div className="row">
        {
          formulario?
            <FormDeporte saveDeporte={saveDeporte} deporteEdit={deporte} />
          :
            <div className="col-12 text-right mb-2">
              <button 
                onClick={_handleOpen}
                className="btn btn-success"
              >
                Crear Deporte
              </button>
            </div>
        }
        <div className="col-12">
          <MaterialTable
              columns={columnsTable}
              icons={Iconos.tableIcons}
              title="Lista de Deportes"
              data={deportes}
              actions={[
                null,

                rowData => ({
                  icon: Iconos.tableIcons.Edit,
                  tooltip: 'Editar',
                  onClick: (event, rowData) => {
                    _handleEdit(rowData)
                  }
                }),
                rowData => ({
                  icon: Iconos.tableIcons.Delete,
                  tooltip: 'Delete',
                  onClick: (event, rowData) => {
                    _handleDelete(rowData)
                  }
                })
              ]}
              options={{
                actionsColumnIndex: -1,
                pageSize:10
              }}
              localization={Iconos.lang}
            />
          </div>
      </div>
    </div>
  )
}
