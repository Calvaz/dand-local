import React from 'react'
import CharacterList from '../component/character/character-list'
import CharacterForm from '../component/character/character.form'
import Store from '../store'
import CharacterDetail from '../component/character/character.detail'
import { Button, Drawer, Dialog, Classes, Intent } from '@blueprintjs/core'

export default class Character extends React.Component {
  constructor(props) {
    super(props)
    this.store = new Store()
    this.handleFormVisibile = this.handleFormVisibile.bind(this)
    this.handleSubmitCharacter = this.handleSubmitCharacter.bind(this)

    this.state = {
      isCharacterFormVisible: false,
      isCharacterSelected: false,
      isDeleteDialogOpen: false,
      selectedCharacter: {},
      characters: []
    }
  }

  handleFormVisibile() {
    this.setState({ isCharacterFormVisible: !this.state.isCharacterFormVisible })
  }

  fetchCharacters = () => {    
    this.store.getAllCharacter().then(
      (characters) => {
        this.setState({ characters: characters })
        
        // update imageUrl for all characters
        characters.forEach((c,idx)=> 
          this.store.getImageURL(c._id).then((url) => {
            c.imageUrl = url
            let newcharacthers = [...this.state.characters]
            newcharacthers[idx] = c
            this.setState({characters: newcharacthers})
          })
        )

      }
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

  unSelectCharacter = () => {
    this.setState({
      selectedCharacter: {},
      isCharacterSelected: false
    })
  }

  deleteDialogHandleOpen = () => this.setState({ isDeleteDialogOpen: true });
  deleteDialgohandleClose = () => this.setState({ isDeleteDialogOpen: false });

  deleteCharacter = () => {    

    let deleteResult = this.store.delete(this.state.selectedCharacter)
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
    this.deleteDialgohandleClose()
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

        <Drawer isOpen={this.state.isCharacterFormVisible}
          title="Add new Character"
          onClose={this.handleFormVisibile}
          canOutsideClickClose={true}
          size='350px'>
          <CharacterForm
            submitComplete={this.handleSubmitCharacter} />
        </Drawer>

        <CharacterList
          characters={this.state.characters}
          selectCharacter={this.onSelectCharacter}
          selectedCharacter={this.state.selectedCharacter} />

        <Drawer isOpen={this.state.isCharacterSelected}
          onClose={this.unSelectCharacter}
          canOutsideClickClose={true}
          title={this.state.selectedCharacter.name}
          size='350px'>
          <CharacterDetail
            character={this.state.selectedCharacter}
            onDelete={this.deleteDialogHandleOpen}
            addImage={this.addImage} />
        </Drawer>

        <Dialog isOpen={this.state.isDeleteDialogOpen}
          icon="delete"
          title="Deleting character">
          <div className={Classes.DIALOG_BODY}>
            <p>Really do you want to delete this pretty character?</p>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={this.deleteDialgohandleClose}>Bless him</Button>
              <Button onClick={this.deleteCharacter}
              intent={Intent.DANGER}>Delete that bitch!</Button>
            </div>
          </div>
        </Dialog>
      </main>
    )
  }
}
