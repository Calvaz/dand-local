import React from 'react'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';


export default class CharacterList extends React.Component {
  
  render () {
    const charlist = this.props.characters.map(c => (
       <li key={c._id}> 
       {c.name} - {c.class}
       </li>
    ))

    return (
      <div>
        <h3>List</h3>
        <ul>
          {charlist}
        </ul>
      </div>)
  }
}
