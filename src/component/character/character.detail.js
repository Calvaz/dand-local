import React from 'react'
import './character.css'
export default class CharacterDetail extends React.Component {
  
  render () {

    return (
      <article className='character-detail'>
      <div><label>Name: </label>  <span>{this.props.character.name}</span></div>
      <div><label>Class: </label> <span>{this.props.character.class}</span></div>
      </article>
      )
  }
}
