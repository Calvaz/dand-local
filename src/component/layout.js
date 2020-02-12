import Header from './header'
import React from 'react'
import Characters from '../pages/characters'
import Locations from '../pages/locations'
import Dashboard from '../pages/dashboard'

export const DASHBOARD = 'DASHBOARD'
export const CHARACTERS = 'CHARACTERS'
export const LOCATIONS = 'LOCATIONS'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = { layout: DASHBOARD }
  }

  onPageChange(page) {
    this.setState({ layout: page })
  }

  render() {
    return (
      <div id="dand-layout">
        <Header />
        <div id="root-flex"><nav>
          <ol>
            <li><button onClick={this.onPageChange.bind(this, DASHBOARD)}>Dashboard</button></li>
            <li><button onClick={this.onPageChange.bind(this, CHARACTERS)}>Characters</button></li>
            <li><button onClick={this.onPageChange.bind(this, LOCATIONS)}>Locations</button></li>
          </ol>
        </nav>          
            {this.state.layout === CHARACTERS && <Characters />}
            {this.state.layout === LOCATIONS && <Locations />}
            {this.state.layout === DASHBOARD && <Dashboard />}
          
        </div>
      </div>
    )
  }
}
