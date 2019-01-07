import React from 'react'

export default class PhrasesContainer extends React.Component{
    
    componentWillMount(){
        this.props.fetchPhrases()
    }

    render(){
        console.log(this.props.phrases);
        
        return(
            <div>oioiois</div>
        )
    }
}