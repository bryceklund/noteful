import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../../NotesContext';
import './Notes.css';

class NoteView extends Component {
    render() {
        const noteId = this.props.props.match.params.noteId
        const noteCard = this.props.notes.find(note => note.id === noteId)
        const folder = this.props.folders.find(folder => folder.id === noteCard.folderId)
        return (
            <div>
                <section className="folders">
                    <Link className="go_back" to='/'>Go back</Link>
                    <p className="current_folder">{folder.name}</p>
                </section>
                <section className="notes">
                    <div className="note_card">
                        <h2>{noteCard.name}</h2>
                        <p>Last modified on {noteCard.modified}</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
                    <div className="note_text">
                        {noteCard.content}
                    </div>
                </section>
            </div>
        );
    }
}

export default NoteView;