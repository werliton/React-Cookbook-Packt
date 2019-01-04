// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import Coins from './Coins';
// Actions
import { fetchCoins } from '../../actions/coinsActions';
// Mapping our Redux State to Props
const mapStateToProps = ({ coins }) => ({
    coins
});
// Binding our fetchCoins action.
const mapDispatchToProps = dispatch => bindActionCreators(
    {fetchCoins},
    dispatch
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Coins);