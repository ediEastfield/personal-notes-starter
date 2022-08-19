import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, body, createdAt, id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} date={createdAt} />
            <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;