import React from 'react'
import CharacterList from '../component/character/character-list'
export default class Character extends React.Component {
  constructor(props) {
    super(props)
    this.handleFormVisibile = this.handleFormVisibile.bind(this)
    this.addNewCharacter = this.addNewCharacter.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      isCharacterFormVisible: false,
      newCharacter: {
        name: '',
        class: ''
      }
    }
  }

  handleFormVisibile() {
    this.setState({ isCharacterFormVisible: !this.state.isCharacterFormVisible })
  }

  addNewCharacter(event) {
    console.log('new character added' + this.state.newCharacter)
    event.preventDefault()
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      newCharacter: {...this.state.newCharacter, [name]: value}
    })
    console.log(this.state)
  }

  render() {
    return (
      <article>
        <h2>Characters</h2>
        <button onClick={this.handleFormVisibile} disabled={this.state.isCharacterFormVisible}>New</button>

        {this.state.isCharacterFormVisible &&
          <form onSubmit={this.addNewCharacter}>
            <fieldset>
              Name: <input name="name" value={this.state.newCharacter.name} onChange={this.handleChange} />
              Class: <input name="class" value={this.state.newCharacter.class} onChange={this.handleChange} />
              <input type="submit" value="Add Character"></input>
            </fieldset>
          </form>
        }

        <CharacterList />
      </article>
    )
  }
}
