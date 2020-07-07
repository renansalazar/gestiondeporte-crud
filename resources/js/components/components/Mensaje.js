import React from 'react'

export default ({close, mensaje, tipo})=>{
    return (
      <div className={"alert alert-"+tipo+" alert-dismissible fade show"} role="alert">
        {mensaje}
        <button type="button" class="close" data-dismiss="alert" onClick={()=>{ close() }} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
}