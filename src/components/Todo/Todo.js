import React, { Component } from 'react'
import List from './List';
import './Todo.css'

const keyStorage = '@tasks'

export default class Todo extends Component {

    constructor(){
        super()

        this.state = {
            task:'',
            items: []
        }
    }

componentWillMount(){
    this.setState({
        items: JSON.parse(localStorage.getItem(keyStorage)) || []
    });
}

handleOnChange = e => {
    const {target: {value} } = e

    this.setState({
        task:value
    })
}

handleOnSubmit = e => {    
    e.preventDefault()
    // Adiconar o novo valor digitado no variavel de estado
    if(this.state.task.trim() !== ''){
        const id = this.state.items.length > 0 ? this.state.items[this.state.items.length -1].id + 1 : 0
        localStorage.setItem(keyStorage, JSON.stringify(
            [
                ...this.state.items,                
                {
                    id: id,
                    task: this.state.task,
                    completed: false
                }
            ]
        ))
        
        this.setState({
            task:'',
            items:JSON.parse(localStorage.getItem(keyStorage))
        }) 
    }
}

// Esta implementação está gerando uma duplicação de item quando marcado como completo
markAsCompleted = id => {
    // Procura a tarefa pelo id
    const taskFound = this.state.items.find(task => task.id === id)  
        
    if(taskFound){
        // Altere status completed para true        
        //taskFound.completed = true  

        // Atualiza a lista de itens
        this.setState({
            items:[
                ...this.state.items,
                ...taskFound
            ]
        })
    }    
}
// Implementação alternativa feita por mim
markAsCompleted2 = id => {    
    const itensUpdated = this.state.items.map( item => {
        if(item.id === id){
            return Object.assign({}, item, {
                completed: true
            })
        }
        return item
    })

    this.setState({items: itensUpdated})
}

removeTask = id => {
    const filterdTasks = this.state.items.filter( task => task.id  !== id)

    this.setState({
        items: filterdTasks
    })

}

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>

        <form onSubmit={this.handleOnSubmit}>
            <input
                value={this.state.task}
                onChange={this.handleOnChange}
            />
        </form>

        <List
            items={this.state.items}
            markAsCompleted={this.markAsCompleted}
            removeTask={this.removeTask}
            />
      </div>
    )
  }
}
