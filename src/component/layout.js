import Header from './header'
import React from 'react'

export default class Layout extends React.Component {
  render () {
    const layoutStyle = {
      margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    }

    return (

      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
