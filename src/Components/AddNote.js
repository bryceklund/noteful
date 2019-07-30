import React, { Component } from 'react';
import NotesContext from '../NotesContext';
import ValidationError from './ValidationError';
import PropTypes from 'prop-types';
import './AddNote.css';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteName: '',
            noteContent: '',
            noteFolder: '',
            nameValid: false,
            validationMessage: ''
            }
        }
    goBack = () => {
        this.props.history.push('/')
    }
    addNote(e, callback) {
        e.preventDefault();
        const { noteName, noteContent, noteFolder } = this.state
        const note = {
            title: noteName,
            content:  noteContent,
            folderid: noteFolder,
            modified: new Date().toLocaleString().toString()
        }
        const url = 'https://evening-ravine-30179.herokuapp.com/api/notes';
        const options = {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        };
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.message);
                }
                return res.json();
            })
            .then(data => callback(data.title, data.content, data.folderid, data.id, data.modified))
            .then(this.goBack)
            .catch(err => console.error(err))
    }
    updateName(noteName) {
        this.setState({  noteName  }, () => {this.validateName(noteName)});
    }
    updateFolderId(folderId) {
        this.setState({  noteFolder: folderId  });
    }
    updateContent(noteContent) {
        this.setState({ noteContent })
    }
    validateName(noteName) {
        let message = '';
        noteName = noteName.trim();
        let hasError = false;
        if (noteName.length === 0) {
            message = 'Please include a name!'
            hasError = true;
        } else {
            message = '';
            hasError= false;
        }
        this.setState({
            validationMessage: message,
            nameValid: !hasError
        })
    }
    render() {
        return (
            <NotesContext.Consumer>
                {(context) => (
                    <form className='add_note_form' id='add_note' onSubmit={e => this.addNote(e, context.addNote)}>
                        <label htmlFor='select_folder' className='hidden'>Folder: {' '}</label>
                        <select name='select_folder' className='select_folder' onChange={e => this.updateFolderId(e.target.value)}>
                            <option value=''>Select a folder...</option>
                            {context.folders.map((folder, i) => <option key={i} value={folder.id}>{folder.title}</option>)}
                        </select><br />
                        <label htmlFor='note_name' className='hidden'>Note title: {' '}</label>
                        <input type='text' id='note_name' name='note_name' className='note_title' placeholder='Note title' onChange={e => this.updateName(e.target.value)} />
                        <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessage} /><br />
                        <textarea className='note_content' name='note_content' form='add_note' placeholder='Note content' onChange={e => this.updateContent(e.target.value)} /><br />
                        <button type='submit' disabled={!this.state.nameValid}>Save</button>
                    </form>
                )}
            </NotesContext.Consumer>

        );
    }
}

AddNote.propTypes = {
    noteName: PropTypes.string.isRequired,
    noteContent: PropTypes.string,
    noteFolder: PropTypes.string.isRequired
}

export default AddNote;