import React from 'react'

export default class LocationList extends React.Component {
    
    render() {
        const locationList = this.props.locations.map((l) => (
            <label key={l._id}>{l.title}<br />{l.description}</label>
        ))

        return (
            <article>
                {locationList}
            </article>
      );
  }
}