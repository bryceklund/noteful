import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../NotesContext';
import './Notes.css';

function deleteNote(noteId, callback) {
    fetch(`http://localhost:8000/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'applications/json',
        'Authorization': 'Bearer 33d5dd60-6329-43f7-a817-1d21f6dece63'
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

class NoteView extends Component {
    static contextType = NotesContext;
    render() {
        const noteId = parseInt(this.props.match.params.noteId);
        const noteCard = this.context.notes.find(note => note.id == noteId);
        const folder = this.context.folders.find(folder => folder.id == noteCard.folderid);

        return (
            <NotesContext.Consumer>
                {(context) => (
                    <div>
                    <section className="folders">
                        <Link className="go_back" to='/'>Go back</Link>
                        <p className="current_folder">{folder.title}</p>
                    </section>
                    <section className="notes">
                        <div className="note_card">
                            <h2>{noteCard.title}</h2>
                            <p>Last modified on {noteCard.modified}</p>
                            <Link className="delete_note" onClick={() => deleteNote(noteId, context.deleteNote)} to='/' >Delete Note</Link>
                        </div>
                        <div className="note_text">
                            {noteCard.content}
                        </div>
                    </section>
                    </div>
                    )}
            </NotesContext.Consumer>
                   

        );
    }
}

export default NoteView;