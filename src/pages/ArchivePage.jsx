import React from "react";
import NoteList from '../components/NoteList';
import NoteSearch from "../components/NoteSearch";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/api";

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            keyword: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
        this.onUnArchiveNoteHandler = this.onUnArchiveNoteHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getArchivedNotes();

        this.setState(() => {
            return { 
                notes: data
            }
        });
    }

    async onDeleteHandler(id) {
        await deleteNote(id);

        const { data } = await getArchivedNotes();
        this.setState(() => {
            return {
                notes: data
            }
        });
    }

    onSearchNoteHandler(search) {
        this.setState(() => {
            return {
                keyword: search
            }
        });
    }

    async onUnArchiveNoteHandler(id) {
        await unarchiveNote(id);

        const { data } = await getArchivedNotes();
        this.setState(() => {
            return {
                notes: data
            }
        });
    }

    render() {
        const filterNotes = this.state.notes.filter((note) => (
            note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        ));


        return (
            <body>
                <div className="note-app__body">
                    <NoteSearch onSearch={this.onSearchNoteHandler}/>
                    <h2>Arsip</h2>
                    <NoteList notes={filterNotes} onDelete={this.onDeleteHandler} onArchive={this.onUnArchiveNoteHandler} />
                </div>
            </body>
        );
    }
}

export default ArchivePage;