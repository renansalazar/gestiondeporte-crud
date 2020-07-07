import React from 'react'

export default ({titulo})=>{
    return (
      <div className="m-3 text-center">
        <h5 className="card-title">{titulo}</h5>
        <hr className="bg-light"/>
      </div>
    )
}