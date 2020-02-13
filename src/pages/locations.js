import React from 'react'
import LocationForm from '../component/location/location.form'

export default class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations = []
    }
  }

  fetchLocations = () => {
    this.store.getAllCharacter().then(
      (locations) => 
        this.setState({ locations: locations })
    )
  }
  
  render () {
    return (
      <main>
        <h2>Locations</h2>
        <LocationForm
          submitComplete = {this.fetchLocations()}
          />
      </main>
    )
  }
}
