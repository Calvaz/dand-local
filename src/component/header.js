import React from 'react'
import Clock from './clock'

import { DASHBOARD, CHARACTERS, LOCATIONS } from './layout'

export default class Header extends React.Component {
  changePage (page) {
    this.props.onChange(page)
    console.log('Change Page ' + page)
  }

  render () {
    return (
      <header>
        <Clock />

        <h1>DanD</h1>
        <h2>a fully local tabletop roleplay manager</h2>
        <menu>
          <li><button onClick={this.changePage.bind(this, DASHBOARD)}>Dashboard</button></li>
          <li><button onClick={this.changePage.bind(this, CHARACTERS)}>Characters</button></li>
          <li><button onClick={this.changePage.bind(this, LOCATIONS)}>Locations</button></li>
        </menu>
        <span>{this.props.layout}</span>
      </header>
    )
  }
}
