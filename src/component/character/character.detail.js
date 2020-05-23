import React from 'react'
import './character.css'
import Store from '../../store'
import { Button, Intent } from '@blueprintjs/core'
export default class CharacterDetail extends React.Component {

  constructor(props) {
    super(props)
    this.store = new Store()

    this.getImageURL = this.getImageURL.bind(this)

    this.state = { imageUrl: '' }
    this.getImageURL()
  }

  getImageURL = () => {
    return this.store.store.getAttachment(this.props.character._id, this.props.character._id)
      .then((image) => {
        let url = URL.createObjectURL(image)
        this.setState({ imageUrl: url })
      })
      .catch((e) => {
        this.setState({ imageUrl: null })
        console.error(e)
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.character._id !== this.props.character._id) {
      this.getImageURL()
    }
  }

  render() {

    return (
      <article className='drawer' >

        <div><label>Name: </label>  <span>{this.props.character.name}</span></div>
        <div><label>Class: </label> <span>{this.props.character.class}</span></div>
        <div>
       
          {(this.state.imageUrl != null) ?
            <img className="detail-image" src={this.state.imageUrl} alt='character profile' ></img>
            : <p></p>
          }
          <input id="image" name="image"
          onChange={(e) => this.props.addImage(e, this.props.character)}
          type="file" ></input>

          <Button onClick={(e) => this.props.onDelete(this.props.character)}
          text="Delete" intent={Intent.DANGER}/>
        </div>
      </article>
    )
  }
}
