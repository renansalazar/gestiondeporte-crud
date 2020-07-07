import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logoutRequest} from '../redux/actions/authActions'
import swal from '@sweetalert/with-react'

const Menu = ({history}) => {
  const dispath = useDispatch()
  const autenticado = useSelector((state)=>state.auth.autenticado)
  useEffect(()=>{
    if(!autenticado){
      history.push(`/login`)
    }
  }, [autenticado])
  
  const _handleCerrarSesion = () => {
    swal({
      text: "¿Estas segur@ de cerrar sesión?",
      icon: "warning",
      buttons: {
        confirm: "Sí",
        cancel: "No",
      },
    }).then((confirm) => {
      if (confirm) {
        dispath(logoutRequest())
      } else {
      }
    })
  }

  //var className = isActive ? 'active' : '';
  //console.log(history)

  const _renderClass = (path) => {
    const isActive = location.pathname === path;
    return isActive ? 'nav-link active' : 'nav-link';
  }

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Gestion Deporte</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className={_renderClass("/")} to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className={_renderClass("/complejo")} to="/complejo">Complejo</Link>
          </li>
          <li className="nav-item">
            <Link className={_renderClass("/deporte")} to="/deporte">Deporte</Link>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <button 
            className="btn btn-outline-danger my-2 my-sm-0"
            onClick={_handleCerrarSesion}
          >
          Cerrar Sesion</button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Menu)