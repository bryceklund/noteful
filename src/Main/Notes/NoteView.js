import React, { Component } from 'react';
import './Notes.css';

class NoteView extends Component {
    render() {
        return (
            <div>
                <section class="folders">
                    <button class="go_back">Go back</button>
                    <p class="current_folder">Folder 3</p>
                </section>
                <section class="notes">
                    <div class="note_card">
                        <h2>Note 2</h2>
                        <p>Date modified on 3rd Jan 2019</p>
                        <button class="delete_note">Delete Note</button>
                    </div>
                    <div class="note_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </section>
            </div>
        );
    }
}

export default NoteView;