import React from 'react'
import CharacterList from '../component/character/character-list'
import CharacterForm from '../component/character/character.form'
import Store from '../store'
import CharacterDetail from '../component/character/character.detail'
import { Button, Drawer } from '@blueprintjs/core'

export default class Character extends React.Component {
  constructor(props) {
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

  handleFormVisibile() {
    this.setState({ isCharacterFormVisible: !this.state.isCharacterFormVisible })
  }

  fetchCharacters = () => {
    this.store.getAllCharacter().then(
      (characters) =>
        this.setState({ characters: characters })
    )
  }

  handleSubmitCharacter() {
    this.fetchCharacters()
    this.handleFormVisibile()
  }

  onSelectCharacter = (character) => {
    this.setState({
      selectedCharacter: character,
      isCharacterSelected: true
    })
  }

  unSelectCharacter = () =>{
    this.setState({
      selectedCharacter: {},
      isCharacterSelected: false
    })
  }

  deleteCharacter = (character) => {
    console.debug(character)
    let deleteResult = this.store.delete(character)
      .then((res) => {
        return res
      })

    console.debug(deleteResult ? 'Character Deleted' : 'Error Occured in deletion')
    if (deleteResult) {
      this.fetchCharacters()
      this.setState({
        selectedCharacter: {},
        isCharacterSelected: false
      })
    }
  }

  addImage = (e, character) => {
    let image = e.target.files[0]
    this.store.addImage(character, image)
  }

  componentDidMount() {
    this.fetchCharacters()
  }

  render() {
    return (
      <main>
        <article>
          <h2>Characters</h2>
          <Button onClick={this.handleFormVisibile} icon='add'
            disabled={this.state.isCharacterFormVisible}>New</Button>
        </article>

        {this.state.isCharacterFormVisible &&
          <CharacterForm
            submitComplete={this.handleSubmitCharacter} />}

        <CharacterList
          characters={this.state.characters}
          selectCharacter={this.onSelectCharacter}
          selectedCharacter={this.state.selectedCharacter} />

        <Drawer isOpen={this.state.isCharacterSelected}
          onClose={this.unSelectCharacter}
          canOutsideClickClose={true}
          title={this.state.selectedCharacter.name}>
          <CharacterDetail
            character={this.state.selectedCharacter}
            onDelete={this.deleteCharacter}
            addImage={this.addImage} />
        </Drawer>
      </main>
    )
  }
}
