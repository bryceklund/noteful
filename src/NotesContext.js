import React from 'react';

const NotesContext = React.createContext({
    folders: [],
    notes: [],
    selectedFolder: undefined,
});

export default NotesContext;