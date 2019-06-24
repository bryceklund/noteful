import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Folders.css';

class FolderView extends Component {
    render() {
        console.log(this.props.folder, 'folder view');
        //const selected = this.props.folders.find(f => f.name === this.props.store.name);
        return (
            <div>{/*}
                <section className="folders">
                    {this.props.store.map(folder => {
                        return <Link to={`/folder/${folder.id}`} className="folder_button" key={folder.id}>{folder.name}</Link>
                    })}
                    <button className="add_folder_button">Add folder</button>
                </section>*/}
               
               
               
               
                <section className="notes">
                    <div className="note_card">
                        <h2>Note 3</h2>
                        <p>Date modified on 3rd Jan 2019</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
                    <div className="note_card">
                        <h2>Note 4</h2>
                        <p>Date modified on 3rd Jan 2019</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
                    <button className="add_note">Add note</button>
                </section>
            </div>
        );
    }
}

export default FolderView;
/*
export default function FolderView(props) {
        console.log(props.folder);
        //const folder = this.props.data.find(f => );
        return (
            <div>
                <section className="folders">
                    <button className="folder_button">Folder 1</button>
                    <button className="folder_button">Folder 2</button>
                    <button className="folder_button highlighted">Folder 3</button>
                    <button className="add_folder_button">Add folder</button>
                </section>
                <section className="notes">
                    <div className="note_card">
                        <h2>Note 3</h2>
                        <p>Date modified on 3rd Jan 2019</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
                    <div className="note_card">
                        <h2>Note 4</h2>
                        <p>Date modified on 3rd Jan 2019</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
                    <button className="add_note">Add note</button>
                </section>
            </div>
        );
}*/