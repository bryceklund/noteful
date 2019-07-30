import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import FolderView from './Components/FolderView';
import Folders from  './Components/Folders';
import NoteView from './Components/NoteView';
import Notes from './Components/Notes';
import NotesContext from './NotesContext';
import AddFolder from './Components/AddFolder';
import AddNote from './Components/AddNote';
import ErrorBound from './Components/ErrorBound';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    folderId: null,
    noteId: null
  }

  addNote = (noteName, noteContent, folderId, noteId, noteModified) => {
    const { notes } = this.state;
    const newNote = {
      id: noteId,
      title: noteName,
      folderId: folderId,
      content: noteContent,
      modified: noteModified
    }
    this.setState({
      notes: [...notes, newNote]
    })
  }

  addFolder = (folderName, folderId) => {
    const { folders } = this.state
    const newFolder = {
      id: folderId,
      title: folderName
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
    const newFolders = this.state.folders.filter(folder => folder.id !== parseInt(folderId))
    this.setState({
      folders: newFolders
    })
  }

  componentDidMount() {
    const url = 'https://evening-ravine-30179.herokuapp.com/api/';
    const options = {
      method: 'GET',
      headers: { 
        'content-type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
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
