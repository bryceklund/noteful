import React, { Component } from 'react';
import './styles.css';
import { Route, Link } from 'react-router-dom';
import FolderView from './Main/Folders/FolderView';
import Folders from  './Main/Folders/Folders';
import NoteView from './Main/Notes/NoteView';
import Notes from './Main/Notes/Notes';
import NotesContext from './NotesContext';
import AddFolder from './Main/Folders/AddFolder/AddFolder';
import AddNote from './Main/Notes/AddNote/AddNote';
import ErrorBound from './ErrorBound';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    folderId: null,
    noteId: null
  }

  addNote = (noteName, noteContent, folderId, noteId) => {
    const { notes } = this.state;
    const newNote = {
      id: noteId,
      name: noteName,
      folderId: folderId,
      content: noteContent
    }
    this.setState({
      notes: [...notes, newNote]
    })
  }

  addFolder = (folderName, folderId) => {
    const { folders } = this.state
    const newFolder = {
      id: folderId,
      name: folderName
    }
    this.setState({
      folders: [...folders,  newFolder]
    })
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
    })  
  }

  deleteFolder = folderId => {
    const newFolders = this.state.folders.filter(folder => folder.id !== folderId)
    this.setState({
      folders: newFolders
    })
  }

  componentDidMount() {
    const url = 'http://localhost:9090/';
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    }

    //get folders
    fetch(url + 'folders', options)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json()
      })
      .then(data => this.setState({
        folders: data
      }))
      .catch(err => console.error(err.message))

      //get notes
      fetch(url + 'notes', options)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json()
      })
      .then(data => this.setState({
        notes: data
      }))
      .catch(err => console.error(err.message))
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      deleteFolder: this.deleteFolder,
      addNote: this.addNote
    }
    return (
      <NotesContext.Provider value={contextValue}>
        <div className="App">
            <header>
                <h1><Link to='/'>Noteful</Link></h1>
            </header>  
              <ErrorBound>
                <Route exact path='/' component={Folders} />
                <Route path='/folder/:folderId' component={FolderView} />
              </ErrorBound>
              <ErrorBound>
                <Route path='/addfolder' component={AddFolder} />
              </ErrorBound>
              <ErrorBound>
                <Route exact path='/' component={Notes} />
                <Route path='/note/:noteId' component={NoteView} />
              </ErrorBound>
              <ErrorBound>
                <Route path='/addnote' component={AddNote} />
              </ErrorBound>
        </div>
      </NotesContext.Provider>

    );
  }
  
  }

export default App;
