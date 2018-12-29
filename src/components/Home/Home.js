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
        }, 5000)
    }

    componentDidMount(){
        this._updateName()
    }

  
    render(){console.log('Name:', this.state.name);

        return (
            <div className="Home">
                <p> Hi my name is {this.state.name}</p>
            </div>
        )
    }
}

export default Home