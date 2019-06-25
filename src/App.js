import React, { Component } from 'react';
import './styles.css';
import { Route, Link } from 'react-router-dom';
import FolderView from './Main/Folders/FolderView';
import Folders from  './Main/Folders/Folders';
import NoteView from './Main/Notes/NoteView';
import Notes from './Main/Notes/Notes';
import STORE from './STORE';

class App extends Component {
  state = {
    folders: STORE.folders,
    notes: STORE.notes,
    folderId: null,
    noteId: null
  }


  render() {
    return (
      <div className="App">
          <header>
              <h1><Link to='/'>Noteful</Link></h1>
          </header>  
            <Route exact path='/' render={() => <Folders folders={this.state.folders} />} />
            <Route path='/folder/:folderId' render={(props) => <FolderView folders={this.state.folders} notes={this.state.notes} props={props} />} />
          
            <Route exact path='/' render={() => <Notes notes={this.state.notes} />} />
            <Route path='/note/:noteId' render={(props) => <NoteView folders={this.state.folders} notes={this.state.notes} props={props} />} />
          
        </div>
    );
  }
  
  }

export default App;
