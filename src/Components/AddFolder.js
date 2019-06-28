import React, { Component } from 'react';
import NotesContext from '../NotesContext';
import PropTypes from 'prop-types';
import './AddFolder.css';

class AddFolder extends Component {
    goBack = () => {
        this.props.history.push('/')
    }

    addFolder(folderName, callback) {
        const name = { name: folderName };
        const url = `http://localhost:9090/folders/`;
        const options = {
            method: 'POST',
            body: JSON.stringify(name),
            headers: {
                'content-type': 'application/json',
            }
        };
    
        fetch(url, options, callback)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res)
                }
                return res.json();
            })
            .then(AddFolder.goBack)
            .then(data => callback(data.name, data.id))
            .then(this.goBack)
            .catch(err => console.error(err))
    
    }

    render() {
        return (
            <NotesContext.Consumer>
                {(context) => (
                    <div className='folder_container'>
                        <form className='add_folder' onSubmit={e => {
                            e.preventDefault();
                            this.addFolder(e.target.folder_name.value, context.addFolder)
                        }} >
                            <label htmlFor='folder_name'>New folder name: {'  '}</label>
                            <input type='text' name='folder_name' id='folder_name' />
                            <button type='submit'>Save</button>
                        </form>
                    </div>
                )}
            </NotesContext.Consumer>
        );
    }
}

AddFolder.propTypes = {
    name: PropTypes.string
};


export default AddFolder;