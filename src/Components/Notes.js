import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../NotesContext';
import './Notes.css';

function deleteNote(noteId, callback) {
    fetch(`https://evening-ravine-30179.herokuapp.com/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'applications/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res
    })
    .then(data => callback(noteId))
    .catch(err => console.error(err))
}


class Notes extends Component {
    render() {

        return (
            <NotesContext.Consumer>
            {(context) => (
                
        <section className="notes">
            {context.notes.map(note => {
                return (note.folderid == parseInt(this.props.folder)) 
                ? (
                    <div className="note_card" key={note.id}>
                        <h2><Link to={`/note/${note.id}`}>{note.title}</Link></h2>
                        <p>Last modified on {note.modified}</p>
                        <button className="delete_note" onClick={() => deleteNote(note.id, context.deleteNote)} >Delete Note</button>
                    </div>
                )
                : ( (!this.props.folder) 
                    ? (
                        <div className="note_card" key={note.id}>
                            <h2><Link to={`/note/${note.id}`}>{note.title}</Link></h2>
                            <p>Last modified on {note.modified}</p>
                            <button className="delete_note" onClick={() => deleteNote(note.id, context.deleteNote)} >Delete Note</button>
                        </div>
                    )
                    : null
                ) 
            })}
            { (this.props.folder) ? <Link to={`/addnote/${this.props.folder}`} className="add_note">Add note</Link> : <Link to='/addnote' className="add_note">Add note</Link> }
            
        </section>
            )}
            </NotesContext.Consumer>
        );
    }
}

export default Notes;