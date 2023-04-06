import React from "react";
import PropTypes from "prop-types";

function ArchiveButton({ id, archived, onArchive }) {
    const label = archived ? 'Pindahkan' : 'Archive';
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{label}</button>
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;