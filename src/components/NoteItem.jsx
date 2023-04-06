import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";
import NoteItemTitle from "./NoteItemTitle";

function NoteItem({ title, body, createdAt, id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemTitle id={id} title={title}/>
            <NoteItemBody body={body} date={createdAt} />
            <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteItem;