import React from 'react'
import './App.css'
import Layout from './component/layout'
import Character from './pages/characters'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.chars = [{ name: 'Ivan', id: 1 }, { name: 'Mario', id: 2 }]

    const DASHBOARD = 'DASHBOARD'
    const CHARACTERS = 'CHARACTERS'
    const LOCATIONS = 'LOCATIONS'

    this.state = {layout: DASHBOARD}
  }

  setPage(page){
    
  }

  render () {

    return (
      <Layout>
        <Character characters={this.chars} />
      </Layout>
    )
  }
}
