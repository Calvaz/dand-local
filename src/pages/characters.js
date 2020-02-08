import React from 'react'
import CharacterList from '../component/character/character-list'
import CharacterForm from '../component/character/character.form'

export default class Character extends React.Component {
  constructor (props) {
    super(props)
    this.handleFormVisibile = this.handleFormVisibile.bind(this)

    this.state = {
      isCharacterFormVisible: false
    }
  }

  handleFormVisibile () {
    this.setState({ isCharacterFormVisible: !this.state.isCharacterFormVisible })
  }

  render () {
    return (
      <article>
        <h2>Characters</h2>
        <button onClick={this.handleFormVisibile} disabled={this.state.isCharacterFormVisible}>New</button>

        {this.state.isCharacterFormVisible &&
          <CharacterForm/>}

        <CharacterList />
      </article>
    )
  }
}
