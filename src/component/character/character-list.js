import React from 'react'
import './character.css'

export default class CharacterList extends React.Component {
  render() {

    const charlist = this.props.characters.map(c => (
      <div className={'flex-item' + (c === this.props.selectedCharacter ? ' selected-item' : '')}
        key={c._id} onClick={(e) => this.props.selectCharacter(c, e)}>

        <small>{c.class}</small>
        <p>{c.name}</p>
      </div>
    ))

    return (
      <article className='flex-container'>
        {charlist}
      </article>
    )
  }
}
