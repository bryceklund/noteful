import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../../NotesContext';
import './Notes.css';

function deleteNote(noteId, callback) {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'applications/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
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
                return (note.folderId === this.props.folder) 
                ? (
                    <div className="note_card" key={note.id}>
                        <h2><Link to={`/note/${note.id}`}>{note.name}</Link></h2>
                        <p>Last modified on {note.modified}</p>
                        <button className="delete_note" onClick={() => deleteNote(note.id, context.deleteNote)} >Delete Note</button>
                    </div>
                )
                : ( (!this.props.folder) 
                    ? (
                        <div className="note_card" key={note.id}>
                            <h2><Link to={`/note/${note.id}`}>{note.name}</Link></h2>
                            <p>Last modified on {note.modified}</p>
                            <button className="delete_note" onClick={() => deleteNote(note.id, context.deleteNote)} >Delete Note</button>
                        </div>
                    )
                    : null
                ) 
            })}
            <Link to='/addnote' className="add_note">Add note</Link>
        </section>
            )}
            </NotesContext.Consumer>
        );
    }
}

export default Notes;