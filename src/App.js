import React, { Component } from 'react'
import './App.css'

import ShowSuppliers from './Containers.js/ShowSuppliers'
import { suppliers } from './Suppliers'


class App extends Component {
  state = {
    suppliers: suppliers,
    currentSeason: '',
    searchSeason: null
  }

  componentDidMount () {
    this.getSeason()
    console.log('hi')
  }

  getSeason = () => {
    const month = this.getMonth()

    let season = ''

    switch(month) {
        case 12:
        case 1:
        case 2:
            season = 'Winter'
        break
        case 3:
        case 4:
        case 5:
            season = 'Spring'
        break
        case 6:
        case 7:
        case 8:
            season = 'Summer'
        break
        case 9:
        case 10:
        case 11:
            season = 'Autumn'
        break
        default:
            season = ''
    }

    this.setState({currentSeason: season})
  }

  getMonth = () => {
    const date = new Date()
    const month = date.getMonth()

    return month
  }

  handleChange = (event) => {
    this.setState({
      searchSeason: event.target.value
    })

    if (event.target.value === 'All'){
        this.setState({
        suppliers: suppliers
      })
    } else {
        this.setState({
        suppliers: suppliers.filter(supplier => supplier.seasons.includes(event.target.value))
      })
    }
  }

  selectSeason = () => {
    return (
      <select onChange={event => this.handleChange(event)}>
        <option selected disabled>select option</option>
        <option value="All">All Suppliers</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
      </select>
    )
  }


  render () {
    const {suppliers, currentSeason, searchSeason} = this.state
    const {selectSeason, searchBySelectedSeason} = this
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>{currentSeason}</h1>
          <h2>Search by season</h2>
          {selectSeason()}
          <ShowSuppliers
          suppliers={suppliers}
          currentSeason={currentSeason}
          searchSeason={searchSeason}

          searchBySelectedSeason={searchBySelectedSeason}
          />
        </header>
      </div>
    )
  }
}

export default App
