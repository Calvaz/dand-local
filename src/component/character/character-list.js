import React from 'react'
import FaceIcon from '@material-ui/icons/Face';


export default class CharacterList extends React.Component {

  render () {

    const flexContainer = {
      display: 'flex',
      flexFlow: 'row'    
    }
    const citem = {
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
      borderRight: '#eceded solid 3px',
      width: '3em'
    }
    const charlist = this.props.characters.map(c => (
       <div styles={citem}
        key={c._id} onClick={(e) => this.props.selectCharacter(c,e)}> 
        <FaceIcon styles={'color: white'}/> {c.name} - {c.class}
       </div>
    ))

    return (
      <div>
        <h3>List</h3>
        <div styles={flexContainer}>
          {charlist}
        </div>
      </div>)
  }
}
