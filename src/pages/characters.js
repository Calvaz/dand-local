import React from 'react'
import CharacterList from '../component/character/character-list'
import CharacterForm from '../component/character/character.form'
import Store from '../store'
import CharacterDetail from '../component/character/character.detail'
export default class Character extends React.Component {
  constructor (props) {
    super(props)
    this.store = new Store()
    this.handleFormVisibile = this.handleFormVisibile.bind(this)
    this.handleSubmitCharacter = this.handleSubmitCharacter.bind(this)

    this.state = {
      isCharacterFormVisible: false,
      isCharacterSelected: false,
      selectedCharacter: {},
      characters: []
    }
  }

  handleFormVisibile () {
    this.setState({ isCharacterFormVisible: !this.state.isCharacterFormVisible })
  }

  fetchCharacters = () =>{ 
    this.store.getAllCharacter().then(
      (characters) =>
      this.setState({characters: characters})
    )
  }

  handleSubmitCharacter () {
    this.fetchCharacters()
    this.handleFormVisibile()
  }
  
  onSelectCharacter = (character) => {
    this.setState({
      selectedCharacter: character,
      isCharacterSelected: true
    })
    
  }

  componentDidMount(){
    this.fetchCharacters()
  }

  render () {
    return (
      <main>
      <article>
        <h2>Characters</h2>
        <button onClick={this.handleFormVisibile} disabled={this.state.isCharacterFormVisible}>New</button>
        </article>

        {this.state.isCharacterFormVisible &&
          <CharacterForm submitComplete={this.handleSubmitCharacter}/>}

        <CharacterList characters={this.state.characters} selectCharacter={this.onSelectCharacter}/>

        {this.state.isCharacterSelected && 
        <CharacterDetail character={this.state.selectedCharacter}></CharacterDetail>}
      </main>
    )
  }
}
