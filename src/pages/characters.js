import React from 'react'

export default class Character extends React.Component {
  render () {
    const chars = this.props.characters.map((c) =>
      <li key={c.id}>{c.name}</li>)

    return (
      <div> Characters:
        <ul>
          {chars}
        </ul>
      </div>
    )
  }
}
