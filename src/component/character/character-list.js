import React from 'react'
import './character.css'
import {Card} from '@blueprintjs/core'
import Store from '../../store'

export default class CharacterList extends React.Component {
  render() {
    const store = new Store();

    const charlist = this.props.characters.map(c => (
      <Card interactive={true} key={c._id}
        onClick={(e) => this.props.selectCharacter(c, e)}
        className='flex-card'>        
        <small>{c.class}</small>
        <p>{c.name}</p>
        <img src={c.imageUrl} className="character-list-image"></img>
      </Card>
      )
    )

    return (
      <article className="flex-card-container">
        {charlist}
      </article>
    )
  }
}
