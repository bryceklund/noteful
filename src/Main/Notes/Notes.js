import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {
    render() {
        return (
        <section className="notes">
            {this.props.notes.map(note => {
                return (
                    <div className="note_card" key={note.id}>
                        <h2>{note.name}</h2>
                        <p>Last modified on {note.modified}</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
                )
            })}
            <button className="add_note">Add note</button>
        </section>
        );
    }
}

export default Notes;