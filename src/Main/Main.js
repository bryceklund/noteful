import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Folders from './Folders/Folders';
import Notes from './Notes/Notes';
import FolderView from './Folders/FolderView';
import NoteView from './Notes/NoteView';


class Main extends Component {
    render() {
        return (
            <div>
                <Folders folders={this.props.store.folders} />
                <Notes notes={this.props.store.notes} />               
            </div>
        );
    }
}

export default Main;