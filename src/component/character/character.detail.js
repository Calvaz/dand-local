import React from 'react'

export default class CharacterDetail extends React.Component {
  
  render () {

    const style = {
      border: '2px solid white'
    }

    return (
      <div style={style}>
        <h3>{this.props.character.name}</h3>
        <h4>{this.props.character.class}</h4>        
      </div>
      )
  }
}
