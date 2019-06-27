import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddFolder.css';


function addFolder(folderName, callback) {
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
        .then(console.log(AddFolder.goBack))
        .then(data => console.log(data))
        
        .catch(err => console.error(err))

}

class AddFolder extends Component {
    goBack = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='folder_container'>
                <form className='add_folder' onSubmit={e => {
                    e.preventDefault();
                    addFolder(e.target.folder_name.value)
                }} >
                    <label htmlFor='folder_name'>New folder name: {'  '}</label>
                    <input type='text' name='folder_name' id='folder_name' />
                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    }
}

export default AddFolder;