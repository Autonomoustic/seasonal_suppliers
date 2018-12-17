import React from 'react'

import './Containers.css'

import Supplier from '../Components.js/Supplier'

class ShowSuppliers extends React.Component {


  renderSeasons = (seasons) => {
    return seasons.map((season, index )=> <span key={index}>{season} </span>)
  }

  renderSuppliers = (suppliers) => {
   return suppliers.map((supplier, index) => {
     if (supplier.seasons.includes(this.props.currentSeason) || this.props.searchSeason) {
        return <Supplier key={index} renderSeasons={this.renderSeasons} supplier={supplier} />
      } else {
        return ''
      }
    })
  }

  render () {
    const {suppliers} = this.props
    const {renderSuppliers} = this
    return (
      <div className='ShowSuppliers' >
        {renderSuppliers(suppliers)}
      </div>
    )
  }
}

export default ShowSuppliers
