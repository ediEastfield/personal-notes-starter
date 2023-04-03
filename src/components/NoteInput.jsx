import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxChar: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const limit = 50;
        const inputTitle = event.target.value.slice(0, limit);
        const used = inputTitle.length;
        this.setState(() => {
            return {
                title: inputTitle,
                maxChar: limit - used
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        if (this.state.title  === '' && this.state.body === '') {
            alert('title atau body tidak bole kosong')
        } else {
            this.props.addNote(this.state);
            this.setState(() => {
                return {
                    title: '',
                    body: '',
                    maxChar: 50
                }
            });
        }
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.maxChar}</p>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;