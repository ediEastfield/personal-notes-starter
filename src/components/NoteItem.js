import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, body, createdAt, id, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} date={createdAt} />
            <NoteItemAction id={id} onDelete={onDelete} />
        </div>
    );
}

export default NoteItem;