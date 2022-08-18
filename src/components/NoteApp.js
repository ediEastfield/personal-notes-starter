import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from '../utils/index';

function NoteApp() {
    const notes = getInitialData();

    return (
        <div className="note-app__body">
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes} />
        </div>
    );
}

export default NoteApp;