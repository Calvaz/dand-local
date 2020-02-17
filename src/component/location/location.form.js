import React from 'react'
import uuid from 'uuid'
import Store from '../../store'

export default class LocationForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addNewLocation = this.addNewLocation.bind(this)

    this.store = new Store()
    this.state = {
      title: '',
      description: '',
      favorite: false
    }
  }

  addNewLocation(event) {
    event.preventDefault()

    const newLocation = {
      _id: uuid.v4(),
      title: this.state.title,
      description: this.state.description,
      favorite: this.state.favorite
    }

    this.store.addLocation(newLocation)
    console.log(newLocation)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <article>
        <form onSubmit={this.addNewLocation}>
          <fieldset>
            <label>Location: </label>
            <input name='title' value={this.state.title} onChange={this.handleChange} />
            <br />
            <label>Description: </label>
            <textarea name='description' value={this.state.description} onChange={this.handleChange} className='locDescription' />
          </fieldset>
          <input type='submit' value='Add location' />
        </form>
      </article>
    )
  }
}
