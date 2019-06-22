import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles.css';

class Main extends Component {
    render() {
        return (
            <body>
                <header>
                    <h1>Noteful</h1>
                </header>
                <section className="folders">
                    <button className="folder_button">Folder 1</button>
                    <button className="folder_button">Folder 2</button>
                    <button className="folder_button">Folder 3</button>
                    <button className="add_folder_button">Add folder</button>
                </section>
                <section className="notes">
                    <div className="note_card">
                        <h2>Note 1</h2>
                        <p>Date modified on 3rd Jan 2019</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
                    <div className="note_card">
                        <h2>Note 2</h2>
                        <p>Date modified on 3rd Jan 2019</p>
                        <button className="delete_note">Delete Note</button>
                    </div>
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
            </body>
        );
    }
}

export default Main;