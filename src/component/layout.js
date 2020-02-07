import Header from './header'
import React from 'react'
import Characters from '../pages/characters'
import Locations from '../pages/locations'
import Dashboard from '../pages/dashboard'

export const DASHBOARD = 'DASHBOARD'
export const CHARACTERS = 'CHARACTERS'
export const LOCATIONS = 'LOCATIONS'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {layout: DASHBOARD}
  }
  
  onPageChange(page){
    this.setState({layout: page})

    
  }

  render () {
    return (
      <div>
        <Header onChange={this.onPageChange.bind(this)} value={this.state.layout}/>
        {this.state.layout === CHARACTERS && <Characters></Characters>}
        {this.state.layout === LOCATIONS && <Locations></Locations>}
        {this.state.layout === DASHBOARD && <Dashboard></Dashboard>}
      </div>
    )
  }
}
