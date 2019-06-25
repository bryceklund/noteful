import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Notes from '../Notes/Notes';
import './Folders.css';

class FolderView extends Component {
    render() {
        const folder = this.props.props.match.params.folderId
        return (
            
            <>
                <section className="folders">
                    {this.props.folders.map(folder => {
                        return <NavLink 
                                    to={`/folder/${folder.id}`} 
                                    className="folder_button" 
                                    activeClassName="active" 
                                    key={folder.id} 
                                    store={this.props.folders}>
                                    {folder.name}
                                </NavLink>
                    })}
                    <Link to='/' className="go_back">Go back</Link>
                </section>
                <Notes notes={this.props.notes} folder={folder} />
            </>
        );
    }
}

export default FolderView;
