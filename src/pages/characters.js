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

    this.state = {
      isCharacterFormVisible: false,
      characters: []
    }
  }

  handleFormVisibile () {
    this.setState({ isCharacterFormVisible: !this.state.isCharacterFormVisible })
  }

  handleSubmitCharacter () {
    this.store.getAllCharacter().then(
      (characters) =>
      this.setState({characters: characters})
    )
  }

  componentDidMount(){
    this.store.getAllCharacter().then(
      (characters) =>
      this.setState({characters: characters})
    )
  }

  render () {
    return (
      <article>
        <h2>Characters</h2>
        <button onClick={this.handleFormVisibile} disabled={this.state.isCharacterFormVisible}>New</button>

        {this.state.isCharacterFormVisible &&
          <CharacterForm submitComplete={this.handleSubmitCharacter}/>}

        <CharacterList characters={this.state.characters ?? []}/>
      </article>
    )
  }
}
