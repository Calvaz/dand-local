import React from 'react'
import CharacterList from '../component/character/character-list'
import CharacterForm from '../component/character/character.form'
import Store from '../store'
export default class Character extends React.Component {
  constructor (props) {
    super(props)
    this.store = new Store()
    this.handleFormVisibile = this.handleFormVisibile.bind(this)
    this.handleSubmitCharacter = this.handleSubmitCharacter.bind(this)

    let characters = this.store.getAllCharacter()

    this.state = {
      isCharacterFormVisible: false,
      characters: characters
    }
  }

  handleFormVisibile () {
    this.setState({ isCharacterFormVisible: !this.state.isCharacterFormVisible })
  }

  handleSubmitCharacter () {
    this.setState({
      characters: this.store.getAllCharacter()
    })
    console.log('submitted')
  }


  render () {
    return (
      <article>
        <h2>Characters</h2>
        <button onClick={this.handleFormVisibile} disabled={this.state.isCharacterFormVisible}>New</button>

        {this.state.isCharacterFormVisible &&
          <CharacterForm submitComplete={this.handleSubmitCharacter}/>}

        <CharacterList characters={this.state.characters}/>
      </article>
    )
  }
}
