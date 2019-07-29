import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotesContext from '../NotesContext';
import './Folders.css'

class Folders extends Component {
    render() {
        return (
            <NotesContext.Consumer>
                {(context) => (
                    <section className="folders">
                        {context.folders.map(folder => {
                            return <NavLink 
                                to={`/folder/${folder.id}`} 
                                className="folder_button" 
                                activeClassName="active" 
                                key={folder.id} 
                                store={context.folders}>
                                {folder.title}
                            </NavLink>
                        })}
                        <Link to='/addfolder' className="add_folder_button">Add folder</Link>
                    </section>
                )}
            </NotesContext.Consumer>

        );
    }
}

export default Folders;