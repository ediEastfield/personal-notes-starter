import React from "react";

function NoteSearch({ onSearch }) {
        return (
            <form className="note-search">
                <input type="text" placeholder="Cari Catatan ..." onChange={(event) => onSearch(event.target.value)} />
            </form>
        )
}

export default NoteSearch;