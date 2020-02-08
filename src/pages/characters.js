import React from 'react'
import CharacterList from '../component/character-list'
export default class Character extends React.Component {
  constructor (props) {
    super(props)
    this.newCharacter.bind(this)
    this.handleNewChar.bind(this)
    this.handleNameChange.bind(this)

    this.state = {
      addCharForm: false
    }
  }

  newCharacter () {
    this.setState({ addCharForm: !this.state.addCharForm })
  }

  handleNewChar () {
    this.newCharacter()
  }

  handleNameChange (e) {
    e.target.value = e.target.value.toUpperCase()
  }

  render () {
    return (
      <article>
        <h2>Characters</h2>
        <button onClick={this.newCharacter.bind(this)}>Add</button>

        {this.state.addCharForm &&
          <form>
            <input name="name" value={null} onChange={this.handleNameChange}/>
          </form>
        }

        <CharacterList />
      </article>
    )
  }
}
