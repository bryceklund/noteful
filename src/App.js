import React, { Component } from 'react';
import './styles.css';
import { Route, Link } from 'react-router-dom';
import FolderView from './Main/Folders/FolderView';
import Folders from  './Main/Folders/Folders';
import NoteView from './Main/Notes/NoteView';
import Notes from './Main/Notes/Notes';
import STORE from './STORE';
import NotesContext from './NotesContext';

class App extends Component {
  state = {
    folders: STORE.folders,
    notes: STORE.notes,
    folderId: null,
    noteId: null
  }

  updateFolder(folder) {
    this.setState({
      folderId: folder
    })
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      selectedFolder: this.state.folderId,
      updateFolder: this.updateFolder
    }
    return (
      <NotesContext.Provider value={contextValue}>
        <div className="App">
            <header>
                <h1><Link to='/'>Noteful</Link></h1>
            </header>  
              <Route exact path='/' component={Folders} />
              <Route path='/folder/:folderId' component={FolderView} />
            
              <Route exact path='/' component={Notes} />
              <Route path='/note/:noteId' component={NoteView} />
        </div>
      </NotesContext.Provider>

    );
  }
  
  }

export default App;
