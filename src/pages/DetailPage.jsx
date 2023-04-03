import React from "react";
import { getNoteById } from '../utils/index';
import { useParams } from "react-router-dom";
import DetailItem from '../components/DetailItem';
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi"
import PropTypes from "prop-types";

function DetailPageWrapper() {
    const {id} = useParams();
    
    return <DetailPage id = {Number(id)} />;
}

class DetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            note : getNoteById(props.id)
        }
    }

    render () {
        if (this.state.note == null) {
            return <p className="notes-list__empty-message">Tidak ada catatan</p>
        }

        return (
            <body>
                <div className="note-app__header">
                    <h1><Link to="/"><FiHome /></Link></h1>
                </div>
                <div className="note-app__body">
                    <DetailItem {...this.state.note} />
                </div>
            </body>
        );
    }
}

DetailPageWrapper.propTypes = {
    id: PropTypes.number.isRequired,
}

export default DetailPageWrapper;