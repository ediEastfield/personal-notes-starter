import React from "react";
import NoteList from '../components/NoteList';
import { getInitialData } from '../utils/index';
import NoteInput from "../components/NoteInput";
import NoteSearch from "../components/NoteSearch";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            keyword: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });

    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearchNoteHandler(search) {
        this.setState(() => {
            return {
                keyword : search
            }
        });
    }

    onArchiveNoteHandler(id) {
        const notes = this.state.notes.map((note) => note.id === id ? { ...note, archived : !note.archived } : note);
        this.setState({ notes });
    }


    render() {
        const filterNotes = this.state.notes.filter((note) => (
            note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        ));

        const archiveNotes = filterNotes.filter((note) => (
            note.archived === false
        ))

        const archivedNotes = filterNotes.filter((note) => (
            note.archived === true
        ))

        return (
            <body>
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <NoteSearch onSearch={this.onSearchNoteHandler}/>
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={archiveNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveNoteHandler} />
                    <h2>Arsip</h2>
                    <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveNoteHandler} />
                </div>
            </body>
        );
    }
}

export default HomePage;