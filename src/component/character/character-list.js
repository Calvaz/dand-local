import React from 'react'

export default class CharacterList extends React.Component {
  render () {
    const charlist = this.props.characters.map(c => (
      <li key={c.doc._id}>{c.doc.name} - {c.doc.class}</li>
    ))

    return (
      <div>
        <h3>List</h3>
        <ul>
          {charlist}
        </ul>
      </div>)
  }
}
