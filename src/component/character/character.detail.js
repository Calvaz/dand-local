import React from 'react'
import './character.css'
export default class CharacterDetail extends React.Component {
  render () {
    return (
      <article className='character-detail'>
        <button onClick={(e) => this.props.onDelete(this.props.character)}>X</button>
        <div><label>Name: </label>  <span>{this.props.character.name}</span></div>
        <div><label>Class: </label> <span>{this.props.character.class}</span></div>
      </article>
    )
  }
}
