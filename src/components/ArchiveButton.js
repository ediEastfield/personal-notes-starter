import React from "react";

function ArchiveButton({ id, archived, onArchive }) {
    const label = archived ? 'Pindahkan' : 'Archive';
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{label}</button>
}

export default ArchiveButton;