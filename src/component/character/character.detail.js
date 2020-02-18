import React from 'react'
import './character.css'
import Store from '../../store'
export default class CharacterDetail extends React.Component {
  
  constructor(props){
    super(props)
    this.store = new Store()

    this.getImage = this.getImage.bind(this)
  }

  getImage = () =>{
    return this.store.store.getAttachment(this.props.character._id, 'image').then(
        function(image){
          let url = URL.createObjectURL(image)
          return url
        }, (e)=>console.error(e)
    )
  }
  
  render () {
    return (
      <article className='character-detail'>
        <button onClick={(e) => this.props.onDelete(this.props.character)}>X</button>
        
        <div><label>Name: </label>  <span>{this.props.character.name}</span></div>
        <div><label>Class: </label> <span>{this.props.character.class}</span></div>
        <div><img src={this.getImage()} ></img></div>
        <input id="image" name="image"
        onChange={(e) => this.props.addImage(e,this.props.character)}
        type="file" ></input>
      </article>
    )
  }
}
