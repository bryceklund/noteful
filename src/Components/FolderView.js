import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Notes from './Notes';
import NotesContext from '../NotesContext';
import ErrorBound from './ErrorBound';
import './Folders.css';



class FolderView extends Component {
    goBack = () => {
        this.props.history.push('/')
    }
    deleteFolder = (folderId, callback) => {
        fetch(`https://evening-ravine-30179.herokuapp.com/api/folders/${folderId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'applications/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        }
        })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res
        })
        .then(data => callback(folderId))
        .then(this.goBack)
        .catch(err => console.error(err))
    }
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
                                        {folder.title}
                                    </NavLink>
                        })}
                        <Link to='/' className="go_back">Go back</Link>
                        <button className='folder_button delete_folder' onClick={() => this.deleteFolder(selectedFolder, context.deleteFolder)} >Delete folder</button>
                        </section>
                        <ErrorBound>
                            <Notes folder={selectedFolder} />
                        </ErrorBound>
                    </>
                )}
            </NotesContext.Consumer>
        );
    }
}

export default FolderView;
