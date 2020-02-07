import Header from './header'
import React from 'react'

export default class Layout extends React.Component {
  render () {
  
    return (

      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
