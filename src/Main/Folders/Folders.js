import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Folders.css'

class Folders extends Component {
    render() {
        console.log(this.props)
        return (
            
            <section className="folders">
                {this.props.folders.map(folder => {
                    return <NavLink to={`/folder/${folder.id}`} className="folder_button" activeClassName="active" key={folder.id} store={this.props.folders}>{folder.name}</NavLink>
                })}
                <button className="add_folder_button">Add folder</button>
            </section>
        );
    }
}

export default Folders;