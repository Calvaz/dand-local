import React from 'react'
import FaceIcon from '@material-ui/icons/Face';
import './character.css'

export default class CharacterList extends React.Component {

  render () {
    const charlist = this.props.characters.map(c => (
       <div className='flex-item'
        key={c._id} onClick={(e) => this.props.selectCharacter(c,e)}> 
        <FaceIcon styles={'color: white'}/> <small>{c.class}</small>
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
