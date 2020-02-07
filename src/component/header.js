import React from 'react'
import Clock from './clock'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <Clock />
        <h1>DanD</h1>
        <h2>a fully local tabletop roleplay manager</h2>
        <menu>
          <li><a href='/'>Dashboard</a></li>
          <li><a href='./pages/character'>Characters</a></li>
          <li><a href='/about'>About</a></li>
        </menu>
      </header>
    )
  }
}
