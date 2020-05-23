import React from 'react'
import './character.css'
import {Card} from '@blueprintjs/core'
export default class CharacterList extends React.Component {
  render() {

    const charlist = this.props.characters.map(c => (
      <Card interactive={true} key={c._id}
        onClick={(e) => this.props.selectCharacter(c, e)}
        className='list'>        
        <small>{c.class}</small>
        <p>{c.name}</p>
      </Card>
    ))

    return (
      <article className='flex-container'>
        {charlist}
      </article>
    )
  }
}
