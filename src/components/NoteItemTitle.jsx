import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NoteItemTitle({ id, title }) {
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">
                <Link to={`/detail/${id}`}>{title}</Link>
            </h3>
        </div>
    );
}

NoteItemTitle.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default NoteItemTitle;