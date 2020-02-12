import React from 'react'
import Clock from './clock'

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

        <span>{this.props.layout}</span>
      </header>
    )
  }
}
