import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {loginRequest, crearUsuario, emptyUsuario} from '../redux/actions/authActions'
import Titulo from '../components/Titulo'
import Footer from '../components/Footer'
import Mensaje from '../components/Mensaje';

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registrar, setRegistrar] = useState(false)
  const [mensaje,setMensaje] = useState(false)
  const [mensajeTexto,setMensajeTexto] = useState("")
  const [mensajeTipo,setMensajeTipo] = useState("")

  const dispatch = useDispatch()
  const isLoading = useSelector((state)=>state.auth.loading)
  const user = useSelector((state)=>state.auth.user)
  const error = useSelector((state)=>state.auth.error)

  useEffect(()=>{
    if(user!=null){
      dispatch(emptyUsuario())
      setRegistrar(false)
      setMensajeTexto("Se registro correctamente!")
      setMensajeTipo("success")
      setMensaje(true)
      setName('')
      setEmail('')
      setPassword('')
    }

    if(error!=null){
      setMensajeTexto(error)
      setMensajeTipo("danger")
      setMensaje(true)
    }

  },[user,error])
    
  const cerrarMensaje = () => {
    setMensaje(false)
  }

  const _handleSubmit = (e) => {
    e.preventDefault()
    if(registrar){
      dispatch(crearUsuario(name, email, password))
    }else{
      dispatch(loginRequest(email, password))
    }
  }
  
  if (localStorage.getItem('token')) {
    return <Redirect to="/" />;
  }

    return (
      <div>
        {
          mensaje?
            <Mensaje close={cerrarMensaje} mensaje={mensajeTexto} tipo={mensajeTipo} />
          :
            <br/>
        }
        {
          registrar?
            <Titulo titulo="Registro" />
          :
            <Titulo titulo="Login" />
        }
        <form className="col-md-6 mt-5 mx-auto" onSubmit={(e)=>_handleSubmit(e)}>
          {
            registrar?
              <div className="form-group row">
                <label htmlFor="id_name" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="id_name"
                    value={name}
                    onChange = {(e)=>setName(e.target.value)}
                  />
                </div>
              </div>
            :
              <br/>
          }
          <div className="form-group row">
            <label htmlFor="id_email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input 
                type="username" 
                className="form-control" 
                value={email}
                id="id_email"
                onChange = {(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="id_password" className="col-sm-2 col-form-label">Contraseña</label>
            <div className="col-sm-10">
              <input 
                type="password" 
                className="form-control" 
                value={password}
                id="id_password"
                onChange = {(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            {
              registrar?
                <div className="col-sm-6 text-right">
                  <button
                  type="button"
                  onClick={()=>{setRegistrar(false)}}
                  className="btn btn-secondary"
                    >
                    Cancelar
                  </button>
                </div>
              :
                <label className="col-sm-12 col-form-label">
                  Si no tiene cuenta <button type="button" className="btn btn-link" onClick={()=>{setRegistrar(true)}} >Registrese aquí</button>
                </label>
            }
            <div className="col-sm-6 text-left">
              <button 
                type="submit"
                className="btn btn-primary"
                disabled = {isLoading}
                >
                {
                  isLoading? 
                    "Cargando..."
                  :
                    registrar?
                      "Registrar"
                    :
                      "Login"
                }
              </button>
            </div>
          </div>
        </form>
        <Footer />
      </div>

    )


}