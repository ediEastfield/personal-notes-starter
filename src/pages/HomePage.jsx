import React from "react";
import NoteList from '../components/NoteList';
import NoteSearch from "../components/NoteSearch";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/api";

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

        this.setState(() => {
            return {
                notes: data,
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

    async onArchiveNoteHandler(id) {
        await archiveNote(id);

        const { data } = await getActiveNotes();
        this.setState(() => {
            return {
                notes: data,
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
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={filterNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveNoteHandler} />
                </div>
            </body>
        );
    }
}

export default HomePage;