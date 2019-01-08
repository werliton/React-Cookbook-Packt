import React from 'react'
import { array } from 'prop-types'
import './Phrase.css'


export default class PhrasesContainer extends React.Component {

    static propTypes = {
        phrases: array
    };
    state = {
        phrase: '',
        author: '',
        editKey: false
    };
    componentWillMount() {
        this.props.fetchPhrases();
    }
    handleOnChange = e => {
        const { target: { name, value } } = e;
        this.setState({
            [name]: value
        });
    }
    handleAddNewPhrase = () => {
        if (this.state.phrase && this.state.author) {
            this.props.addPhrase(
                this.state.phrase,
                this.state.author
            );
            // After we created the new phrase we clean the states
            this.setState({
                phrase: '',
                author: ''
            });
        }
    }
    handleDeleteElement = key => {
        this.props.deletePhrase(key);
    }
    handleEditElement = (key, phrase, author) => {
        this.setState({
            editKey: key,
            phrase,
            author
        });
    }
    handleUpdatePhrase = () => {
        if (this.state.phrase && this.state.author) {
            this.props.updatePhrase(
                this.state.editKey,
                this.state.phrase,
                this.state.author
            );
            this.setState({
                phrase: '',
                author: '',
                editKey: false
            });
        }
    }
    render() {
        const { phrases } = this.props;
        return (
            <div className="phrases">
                <div className="add">
                    <p>Phrase: </p>
                    <textarea
                        name="phrase"
                        value={this.state.phrase}
                        onChange={this.handleOnChange}
                    ></textarea>
                    <p>Author</p>
                    <input
                        name="author"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                    />
                    <p>
                        <button
                            onClick={
                                this.state.editKey
                                    ? this.handleUpdatePhrase
                                    : this.handleAddNewPhrase
                            }
                        >
                            {this.state.editKey
                                ? 'Edit Phrase'
                                : 'Add New Phrase'}
                        </button>
                    </p>
                </div>
                {phrases && phrases.map(({ key, phrase, author }) => (
                    <blockquote key={key} className="phrase">
                        <p className="mark">
                            “
        </p>
                        <p className="text">
                            {phrase}
                        </p>
                        <hr />
                        <p className="author">
                            {author}
                        </p>
                        <a
                            onClick={() => {
                                this.handleDeleteElement(key);
                            }}
                        >
                            X
        </a>
                        <a
                            onClick={
                                () => this.handleEditElement(key, phrase, author)
                            }
                        >
                            Edit
                                    </a>
                    </blockquote>
                ))}
            </div>
        );
    }
}