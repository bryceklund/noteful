import React, { Component } from 'react';
import './styles.css';
import { Route, Link } from 'react-router-dom';
import FolderView from './Main/Folders/FolderView';
import Folders from  './Main/Folders/Folders';
import NoteView from './Main/Notes/NoteView';
import Notes from './Main/Notes/Notes';
import NotesContext from './NotesContext';
import AddFolder from './Main/Folders/AddFolder/AddFolder';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    folderId: null,
    noteId: null
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
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

      console.log(this.state)
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      selectedFolder: this.state.folderId,
      deleteNote: this.deleteNote
    }
    return (
      <NotesContext.Provider value={contextValue}>
        <div className="App">
            <header>
                <h1><Link to='/'>Noteful</Link></h1>
            </header>  
              <Route exact path='/' component={Folders} />
              <Route path='/folder/:folderId' component={FolderView} />
              <Route path='/addfolder' component={AddFolder} />
              <Route exact path='/' component={Notes} />
              <Route path='/note/:noteId' component={NoteView} />
        </div>
      </NotesContext.Provider>

    );
  }
  
  }

export default App;
