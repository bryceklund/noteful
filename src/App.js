import React, { Component } from 'react';
import './styles.css';
import { Route, Link } from 'react-router-dom';
import Main from './Main/Main';
import FolderView from './Main/Folders/FolderView';
import NoteView from './Main/Notes/NoteView';
import STORE from './STORE';

class App extends Component {
  state = STORE;

  render() {
    return (
      <div className="App">
          <header>
              <h1><Link to='/'>Noteful</Link></h1>
          </header>  
          <Route exact path='/' component={() => {
            return <Main store={this.state} />
          }} />  
          <Route path='/notes/:noteId' component={() => {
            return <NoteView data={this.state} />
          }} />
          <Route path='/folders/:folderId' component={() => {
            return <FolderView data={this.state} />
          }} />
      </div>
    );
  }
  
  }

export default App;
