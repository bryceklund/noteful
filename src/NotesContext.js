import React from 'react';

const NotesContext = React.createContext({
    folders: [],
    notes: [],
    selectedFolder: undefined,
    updateFolder: () => {

    }
});

export default NotesContext;