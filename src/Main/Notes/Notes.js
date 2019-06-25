import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

class Notes extends Component {
    render() {
        return (
        <section className="notes">
            {this.props.notes.map(note => {
                return (note.folderId === this.props.folder) 
                ? (
                    <div className="note_card" key={note.id}>
                        <h2><Link to={`/note/${note.id}`}>{note.name}</Link></h2>
                        <p>Last modified on {note.modified}</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
                )
                : ( (!this.props.folder) 
                    ? (
                        <div className="note_card" key={note.id}>
                            <h2><Link to={`/note/${note.id}`}>{note.name}</Link></h2>
                            <p>Last modified on {note.modified}</p>
                            <button className="delete_note">Delete Note</button>
                        </div>
                    )
                    : null
                ) 
            })}
            <button className="add_note">Add note</button>
        </section>
        );
    }
}

export default Notes;