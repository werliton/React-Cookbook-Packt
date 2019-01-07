import React from 'react'

export default class PhrasesContainer extends React.Component {

    componentWillMount() {
        this.props.fetchPhrases()
    }

    _testAddPhrase = () => {
        this.props.addPhrase('Testing insert into firebase', 'Letox')
    }

    render() {

        const { phrases } = this.props
        return (
            <div>
                <h1>Phrases</h1>
                <ul>
                    {
                        phrases.map(phrase =>
                            <li key={phrase.key}>Author: {phrase.author} - {phrase.phrase}</li>
                        )
                    }
                </ul>
                <button onClick={this._testAddPhrase}> Insert into firebase</button>
            </div>

        )
    }
}