import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PhrasesContainer from './PhrasesContainer'
import { fetchPhrases, addPhrase } from '../../actions/phrasesActions'

const mapStateToProps = (state) => ({
    phrases: state.phrases.phrases
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { fetchPhrases, addPhrase },
    dispatch
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhrasesContainer)
