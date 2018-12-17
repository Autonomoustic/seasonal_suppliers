import React from 'react'

import './Components.css'

const Supplier = props =>
  <div className='Supplier'>
    <h3>name {props.supplier.name}</h3>
    {props.renderSeasons(props.supplier.seasons)}
  </div>

export default Supplier
