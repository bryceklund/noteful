import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Notes from '../Notes/Notes';
import NotesContext from '../../NotesContext';
import './Folders.css';

class FolderView extends Component {
    render() {
        const selectedFolder = this.props.match.params.folderId
        return (
            <NotesContext.Consumer>
                {(context) => (
                    <>
                        <section className="folders">
                        {context.folders.map(folder => {
                            return <NavLink 
                                        to={`/folder/${folder.id}`} 
                                        className="folder_button" 
                                        activeClassName="active" 
                                        key={folder.id} 
                                        store={context.folders}>
                                        {folder.name}
                                    </NavLink>
                        })}
                        <Link to='/' className="go_back">Go back</Link>
                        </section>
                        <Notes folder={selectedFolder} />
                    </>
                )}
            </NotesContext.Consumer>
        );
    }
}

export default FolderView;
