import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Folders.css'

class Folders extends Component {
    render() {
        return (
            <section className="folders">
                {this.props.folders.map(folder => {
                    return <Link to={`/folder/${folder.id}`} className="folder_button" key={folder.id}>{folder.name}</Link>
                })}
                <button className="add_folder_button">Add folder</button>
            </section>
        );
    }
}

export default Folders;