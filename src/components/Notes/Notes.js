import React, { Component } from 'react'
import './Notes.css'
import moment from 'moment'

const formatTime = 'YYYY-MM-DD HH:mm:ss'

export default class Notes extends Component {
    constructor(){
        super()
        // Salva a primeira data quando os dados sao renderizados no inicio
        this.state = {
            lastUpdate: moment().format(formatTime).toString()
        }
    }

    componentWillReceiveProps(nextProps){
      // Se a prop notas teve mudança
      if (nextProps.notes !== this.props.notes) {
          this.setState({
              lastUpdate: moment().format(formatTime).toString()
          })
      }
    }
    
    render() {
        const { notes } = this.props

        return (
            <div className="Notes">
                <h1>Notes:</h1>
                <ul>
                    {notes.map((note, key) => (
                    <li key={key}>{note.title} - {note.content}</li>
                    ))}
                </ul>
                <p>Last Update: <strong>{this.state.lastUpdate}</strong></p>
            </div>
        )
    }
}
