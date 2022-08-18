import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ title, body, date }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} date={date} />
        </div>
    );
}

export default NoteItem;