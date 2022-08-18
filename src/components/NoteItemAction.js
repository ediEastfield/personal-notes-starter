import React from "react";
import DeleteButton from "./DeleteButton";

function NoteItemAction({ id, onDelete }) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default NoteItemAction;