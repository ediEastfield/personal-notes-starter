import React from "react";
import NoteList from '../components/NoteList';
import NoteSearch from "../components/NoteSearch";
import { getActiveNotes, getArchivedNotes, deleteNote } from "../utils/api";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            archives: [],
            keyword: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getActiveNotes();
        const { archived } = await getArchivedNotes();

        this.setState(() => {
            return {
                notes: data,
                archives: archived
            }
        })
    }

    async onDeleteHandler(id) {
        await deleteNote(id);

        const { data } = await getActiveNotes();
        this.setState(() => {
            return {
                notes: data,
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

        console.log(this.state.archives);

        return (
            <body>
                <div className="note-app__body">
                    <NoteSearch onSearch={this.onSearchNoteHandler}/>
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