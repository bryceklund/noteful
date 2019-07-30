import React, { Component } from 'react';
import NotesContext from '../NotesContext';
import PropTypes from 'prop-types';
import ValidationError from './ValidationError';
import './AddFolder.css';

class AddFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderName: '',
            nameValid: false,
            validationMessage: ''
        }
    }
    goBack = () => {
        this.props.history.push('/')
    }

    updateName(name) {
        this.setState({ folderName: name }, () => this.validateName(name))
    }

    validateName(folderName) {
        let message = '';
        let hasError = false;
        folderName = folderName.trim();
        if (folderName.length === 0) {
            message = 'Please include a name!'
            hasError = true;
        } else {
            message = '';
            hasError= false;
        }
        this.setState({
            validationMessage: message,
            nameValid: !hasError
        })
    }

    addFolder(folderName, callback) {
        const title = { title: folderName };
        const url = 'https://evening-ravine-30179.herokuapp.com/api/folders';
        const options = {
            method: 'POST',
            body: JSON.stringify(title),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        };
    
        fetch(url, options, callback)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res)
                }
                return res.json();
            })
            .then(data => callback(data.title, data.id))
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
                            this.addFolder(e.target.folder_name.value, context.addFolder);
                        }} >
                            <label htmlFor='folder_name'>New folder name: {'  '}</label>
                            <input type='text' name='folder_name' id='folder_name' onChange={e => this.updateName(e.target.value)} />
                            <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessage} /><br />
                            <button type='submit' disabled={!this.state.nameValid}>Save</button>
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