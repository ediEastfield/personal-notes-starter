import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from '../utils/index'

function NoteItemBody({ body, date }) {
    return (
        <div className="note-item__content">
            <p className="note-item__date">{showFormattedDate(date)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

NoteItemBody.propTypes = {
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default NoteItemBody;