import React from 'react'
import Store from '../../store'
import uuid from 'uuid'

export default class CharacterForm extends React.Component {
  constructor (props) {
    super(props)
    this.addNewCharacter = this.addNewCharacter.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.store = new Store()
    this.state = {
      name: '',
      class: ''
    }
  }

  addNewCharacter (event) {
    event.preventDefault()

    const newChar = {
      _id: uuid.v4(),
      name: this.state.name,
      class: this.state.class
    }
    console.log(newChar)
    this.store.addCharacter(newChar)
    console.log(this.store.getAllCharacter())
    this.props.submitComplete()
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
      <article>
      <form onSubmit={this.addNewCharacter}>
        <fieldset>
          Name: <input name='name' value={this.state.name} onChange={this.handleChange} />
          Class: <input name='class' value={this.state.class} onChange={this.handleChange} />
          <input type='submit' value='Add Character' />
        </fieldset>
      </form>
      </article>
    )
  }
}
