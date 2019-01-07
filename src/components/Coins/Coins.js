import React, { Component } from 'react'
//import { array } from 'prop-types'
import './Coins.css'

//import { isFirstRender } from '../../shared/utils/frontend'

export default class Coins extends Component {
    static propTypes = {
        //coins: array
    }

    componentWillMount(){
        this.props.fetchCoins()
    }
  
    render() {
        const { coins: { coins } } = this.props;
        // If the coins const is an empty array,
        // then we return null.
        /*if (isFirstRender(coins)) {
            return null;
        }*/
        return (
            <div className="Coins">
                <h1>Top 100 Coins</h1>
                <ul>
                    {coins.map((coin, key) => (
                        <li key={key}>
                            <span className="left">
                            {coin.rank} {coin.name} {coin.symbol}
                            </span>
                            <span className="right">${coin.price_usd}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
