import React from 'react'
import Store from '../../store'
import uuid from 'uuid'

export default class LocationForm extends React.Component  {
  constructor(props) {
    super(props);

    this.store = new Store()
    this.state = {
      title = '',
      description = '',
      favorite = false
    }
  }
  
  addNewLocation(event) {
      event.preventDefault()

      const newLocation = {
        _id: uuid.v4(),
        title = this.state.title,
        description = this.state.description,
        favorite = this.state.favorite
      }

      console.log(newLocation);
      this.store.addCharacter(newLocation)
      console.log(this.store.getAllCharacter())
      this.store.getAllCharacter()
      
    }

  render() {
      return (
        <button >
            {() => this.addNewLocation()}
        </button>
      )
  }
}
