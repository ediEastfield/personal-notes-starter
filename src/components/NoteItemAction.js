import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemAction({ id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
        </div>
    );
}

export default NoteItemAction;