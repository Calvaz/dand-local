import React from 'react'
import Store from '../../store'

export default class CharacterForm extends React.Component {
  constructor (props) {
    super(props)
    this.addNewCharacter = this.addNewCharacter.bind(this)
    this.handleChange = this.handleChange.bind(this)
    

    this.state = {
      name: '',
      class: ''
    }
  }

  
  addNewCharacter (event) {
    console.log(this.state)
    //todo store save
    let store = new Store()
    store.addCharacter(this.state);
    
    event.preventDefault()
  }

  handleChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <form onSubmit={this.addNewCharacter}>
        <fieldset>
          Name: <input name='name' value={this.state.name} onChange={this.handleChange} />
          Class: <input name='class' value={this.state.class} onChange={this.handleChange} />
          <input type='submit' value='Add Character' />
        </fieldset>
        
      </form>
    )
  }
}
