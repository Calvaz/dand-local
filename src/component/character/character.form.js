import React from 'react'
import Store from '../../store'
import uuid from 'uuid'
import { Button, Drawer, Label, FormGroup, InputGroup,
  RadioGroup, Radio, Intent, Switch } from '@blueprintjs/core'
export default class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.addNewCharacter = this.addNewCharacter.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.store = new Store()
    this.state = {
      name: '',
      class: '',
      sex: '',
      isFavorite: false,
    }
  }

  addNewCharacter(event) {
    event.preventDefault()

    const newChar = {
      _id: uuid.v4(),
      name: this.state.name,
      class: this.state.class,
      sex: this.state.sex,
      isFavorite: this.state.isFavorite
    }
    console.log(newChar)
    this.store.addCharacter(newChar)
    console.log(this.store.getAllCharacter())
    this.props.submitComplete()
  }

  handleChange(event) {
    const target = event.target
    let value = target.value
    const name = target.name

    if(target.type === 'checkbox')
      value = target.checked

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='drawer'>
        <FormGroup
          label="Name"
          labelFor="name"
          labelInfo="(required)">
          <InputGroup name="name" placeholder="name"
            value={this.state.name} onChange={this.handleChange} />
        </FormGroup>
        <FormGroup
          label="Class"
          labelFor="class"
          labelInfo="(required)">
          <InputGroup name="class" placeholder="class"
            value={this.state.class}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
        <RadioGroup
          label="Sex" name="sex"
          onChange={this.handleChange}
          selectedValue={this.state.sex}>
          <Radio label="Male" value="male" />
          <Radio label="Female" value="female" />
        </RadioGroup>
        </FormGroup>
        <FormGroup>
        <Switch checked={this.state.isFavorite} 
        name="isFavorite"
        label="Favorite" 
        onChange={this.handleChange} />
        </FormGroup>
        <Button text='Add Character' onClick={this.addNewCharacter}
          intent={Intent.PRIMARY} />

      </div>
    )
  }
}
