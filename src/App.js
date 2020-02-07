import React from 'react'
import './App.css'
import Layout from './component/layout'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.chars = [{ name: 'Ivan', id: 1 }, { name: 'Mario', id: 2 }]
  }

  render () {

    return (
      <Layout />
    )
  }
}
