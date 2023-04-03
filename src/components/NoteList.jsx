import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

class NoteList extends React.Component {
    render() {
        return (
            
            this.props.notes.length > 0 ?
                <div className="notes-list">
                    {
                        this.props.notes.map((note) => (
                            <NoteItem 
                            key={note.id}
                            id={note.id}
                            archived={note.archived}
                            onDelete={this.props.onDelete}
                            onArchive={this.props.onArchive}
                            {...note} />
                        ))
                    }
                </div> :
                <p className="notes-list__empty-message">Tidak ada catatan</p>
        );
    }
}

NoteList.propType = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteList;