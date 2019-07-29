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
        const noteId = this.props.match.params.noteId;
        const noteCard = {
            content: "Friedrich August von Alberti was a German geologist whose ground-breaking 1834 publication[1] recognized the unity of the three characteristic strata that compose the sedimentary deposits of the Triassic period in Northern Europe. From the fossils contained in the three distinct layers— of red bed sandstones, capped by limestones (Muschelkalk), followed by black shales— that are found throughout Germany and Northwest Europe, and are called the Trias (Latin trias meaning triad), Alberti detected that they formed a single stratigraphic formation; today it would be termed a system. He identified the Triassic as bearing a unique fossil fauna, bounded by the Permian extinction below and by another extinction above.",
            folderid: 1,
            id: 1,
            modified: "2019-07-30T03:10:02.362Z",
            title: "Freddy"
        }//this.context.notes.find(note => note.id === noteId);
        const folder = {id: 1, title: "Socks"};//this.context.folders.find(folder => folder.id === noteCard.folderid);
        
        console.log('notes:', this.context.notes, 'folders:', this.context.folders)

        const newNoteId = this.props.match.params.noteId;
        const newNoteCard = this.context.notes.find(note => note.id === newNoteId);
        const newFolder = this.context.folders.find(folder => folder.id === newNoteCard.folderid);

        console.log(newNoteId, newNoteCard, newFolder);

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