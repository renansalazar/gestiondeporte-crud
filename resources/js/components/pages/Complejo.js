import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {useSelector, useDispatch} from 'react-redux'
import swal from '@sweetalert/with-react'

import {fetchComplejos, emptyComplejo, eliminarComplejo} from '../redux/actions/complejoActions'
import Titulo from '../components/Titulo';
import Mensaje from '../components/Mensaje';
import Iconos from '../components/Iconos';
import FormComplejo from '../components/FormComplejo'

const columnsTable = [
        {
          title: 'Tipo',
          field: 'tipo'
        },
        {
          title: 'Jefe de Organizacion',
          field: 'jefe'
        },
        {
          title: 'Area Total',
          field: 'area'
        },
        {
          title: 'Presupuesto',
          field: 'presupuesto',
        }
    ]
export default () => {
  const dispatch = useDispatch()
  const [formulario,setFormulario] = useState(false)
  const [mensaje,setMensaje] = useState(false)
  const [mensajeTexto,setMensajeTexto] = useState("")
  const [mensajeTipo,setMensajeTipo] = useState("")
  const [complejo, setComplejo] = useState({})
  const complejos = useSelector((state)=>state.complejo.items.items)
  const eliminar = useSelector((state)=>state.complejo.eliminar)
  const error = useSelector((state)=>state.complejo.item.error)

  useEffect(()=>{
    dispatch(fetchComplejos())
  },[])

  useEffect(()=>{
    if(error!=null){
      setMensajeTexto(error.message || JSON.stringify(error))
      setMensajeTipo("danger")
      setMensaje(true)
    }

    if(eliminar){
      dispatch(fetchComplejos())
      dispatch(emptyComplejo())
      setMensajeTexto("Se eliminó correctamente!")
      setMensajeTipo("success")
      setMensaje(true)
    }
  },[eliminar, error])

  const _handleOpen = () => {
    dispatch(emptyComplejo())
    setComplejo({})
    setFormulario(true)
    window.scrollTo(0, 0)
  }

  const saveComplejo = (res) => {
    setFormulario(false)
    dispatch(fetchComplejos())
    if(res){
      setMensajeTexto("Se guardo correctamente!")
      setMensajeTipo("success")
      setMensaje(true)
    }
  }

  const _handleEdit = (rowData) => {
    dispatch(emptyComplejo())
    setComplejo(rowData)
    setFormulario(true)
    window.scrollTo(0, 0)
  }

  const _handleDelete = (rowData) => {
    swal({
      text: "¿Estas seguro de eliminar este complejo?",
      icon: "error",
      buttons: {
        confirm: "Sí",
        cancel: "No",
      },
    }).then((confirm) => {
      if (confirm) {
        dispatch(eliminarComplejo(rowData.id))
      } else {

      }
    })
  }
  
  const cerrarMensaje = () => {
    setMensaje(false)
  }

  return (
    <div>
      <Titulo titulo="CRUD de Complejos" />
      {
        mensaje?
          <Mensaje close={cerrarMensaje} mensaje={mensajeTexto} tipo={mensajeTipo}/>
        :
          <br/>
      }
            
      <div className="row">
        {
          formulario?
            <FormComplejo saveComplejo={saveComplejo} complejoEdit={complejo} />
          :
            <div className="col-12 text-right mb-2">
              <button 
                onClick={_handleOpen}
                className="btn btn-success"
              >
                Crear Complejo
              </button>
            </div>
        }
        <div className="col-12">
          <MaterialTable
              columns={columnsTable}
              icons={Iconos.tableIcons}
              title="Lista de Complejos Deportivos"
              data={complejos}
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
