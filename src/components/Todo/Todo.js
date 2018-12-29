import React, { Component } from 'react'
import List from './List';
import './Todo.css'

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
        items: [
            {
                id: 34,
                task: 'Pay the rent',
                completed: false
            },
            {
                id: 35,
                task: 'Go to the gym',
                completed: false
            },
            {
                id: 36,
                task: 'Do my homework',
                completed: false
            }
        ]
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
        this.setState({
            task:'',
            items:[
                ...this.state.items,                
                {
                    id: this.state.items[this.state.items.length -1].id + 1,
                    task: this.state.task,
                    completed: false
                }
            ]
        })        
    }
}

// Esta implementação está gerando uma duplicação de item quando marcado como completo
markAsCompleted = id => {
    // Procura a tarefa pelo id
    const taskFound = this.state.items.find(task => task.id === id)  
        
    if(taskFound){
        // Altere status completed para true        
        taskFound.completed = true  

        // Atualiza a lista de itens
        this.setState({
            items:[
                ...this.state.items
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
