import React from "react";
import { getSingleNote } from "../utils/api";
import { useParams } from "react-router-dom";
import DetailItem from '../components/DetailItem';
import PropTypes from "prop-types";

function DetailPageWrapper() {
    const {id} = useParams();
    
    return <DetailPage id = {id} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note : {}
        }
    }

    async componentDidMount() {
        const { data } = await getSingleNote(this.props.id);

        this.setState(() => {
            return {
                note: data
            }
        });
    }

    render () {
        console.log(this.state.note)
        if (this.state.note == null) {
            return <p className="notes-list__empty-message">Tidak ada catatan</p>
        }

        return (
            <body>
                <div className="note-app__body">
                    <DetailItem {...this.state.note} />
                </div>
            </body>
        );
    }
}

DetailPageWrapper.propTypes = {
    id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;