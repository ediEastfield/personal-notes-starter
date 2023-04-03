import React from "react";
import PropTypes from "prop-types";

function NoteSearch({ onSearch }) {
        return (
            <form className="note-search">
                <input type="text" placeholder="Cari Catatan ..." onChange={(event) => onSearch(event.target.value)} />
            </form>
        )
}

NoteSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default NoteSearch;