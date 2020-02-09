import React from 'react'

export default class CharacterList extends React.Component {
  render() {
    return (
    <div>
      <h3>List</h3>
      <ul>
        {this.props.characters.map( c => (
         <li key={c._id}>{c.name} - {c.class}</li>
        ))}
      </ul>
    </div>)
    
  }
}
