import React from 'react'
import LocationForm from '../component/location/location.form'
import LocationList from '../component/location/location-list'
import Store from '../store'

export default class Locations extends React.Component {
  constructor(props) {
    super(props)

    this.store = new Store()
    this.handleFormVisibile = this.handleFormVisibile.bind(this)

    this.state = {
      isLocationFormVisible: false,
      locations: []
    }
  }

  handleFormVisibile() {
    this.setState({ isLocationFormVisible: !this.isLocationFormVisible })
  }

  fetchLocations = () => {
    this.store.getAllLocation().then(
      (locations) =>
        this.setState({ locations: locations })
    )
  }

  componentDidMount() {
    this.fetchLocations()
  }

  render() {
    return (
      <main>
        <article>
          <h2>Locations</h2>
          <button onClick={this.handleFormVisibile} disabled={this.state.isLocationFormVisible}>New</button>
        </article>
        {this.state.isLocationFormVisible &&
          <LocationForm
            submitComplete={this.fetchLocations()} />
        }

        <LocationList
          locations={this.state.locations}
        />
      </main>
    )
  }
}
