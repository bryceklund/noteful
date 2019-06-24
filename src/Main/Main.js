import React, { Component } from 'react';
import Folders from './Folders/Folders';
import Notes from './Notes/Notes';

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