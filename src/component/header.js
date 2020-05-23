import React from 'react'
import Clock from './clock'
import { Navbar, Button, Alignment } from '@blueprintjs/core'

import { DASHBOARD, CHARACTERS, LOCATIONS } from './layout'

export default class Header extends React.Component {
  changePage(page) {
    this.props.onChange(page)
    console.log('Change Page ' + page)
  }
  onPageChange(page) {
    this.setState({ layout: page })
  }

  render() {
    return (
      <header>        
        <Navbar>
          <Navbar.Group>
            <Navbar.Heading>DanD | a rpg manager</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Dashboard" />
            <Button className="bp3-minimal" icon="person" text="Characters" />
            <Button className="bp3-minimal" icon="map" text="Locations" />
          </Navbar.Group>
        </Navbar>
      </header>
    )
  }
}
