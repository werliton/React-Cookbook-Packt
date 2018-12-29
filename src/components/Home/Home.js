import React from 'react'
import './Home.css'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            name: ' Carlos'
        }
    }

    _updateName(){
        setTimeout(()=> {
            this.setState({
                name:'João Miguel'
            })
        }, 10000)
    }

    render(){

        this._updateName()
        return (
            <div className="Home">
                <p> Hi my name is {this.state.name}</p>
            </div>
        )
    }
}

export default Home