import React from 'react';

const NotesContext = React.createContext({
    folders: [],
    notes: [],
    selectedFolder: undefined,
    deleteNote: null
});

export default NotesContext;