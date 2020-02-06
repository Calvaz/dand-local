import React from 'react'

export default class Character extends React.Component {
    render() {
        return (
            <div> Characters:
                <ul>
                    {this.props.characters.forEach(element => {
                        return (<li>{element.name}</li>)
                    })
                    }
                </ul>
            </div>
        )
    }
}