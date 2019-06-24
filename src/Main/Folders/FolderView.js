import React, { Component } from 'react';
import './Folders.css';

class FolderView extends Component {
    render() {
        console.log(this.props.data, 'folder view');
        const folder = this.props.data.find(f => /*folderid in list matches router.props.match.id, then render the list of folders with id */);

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
    }
}

export default FolderView;