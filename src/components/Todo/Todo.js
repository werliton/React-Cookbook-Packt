import React, { Component } from 'react'
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

handleOnChange = (e) => {
    const {target: {value} } = e

    this.setState({
        task:value
    })
}

handleOnSubmit = (e) => {
    console.log(this.state.items);
    
    e.preventDefault()
    // Adiconar o novo valor digitado no variavel de estado
    if(this.state.task.trim() !== ''){
        this.setState({
            task:'',
            items:[
                ...this.state.items,                
                {
                    id: 37,
                    task: this.state.task,
                    completed: false
                }
            ]
        })
        

    console.log('Depois do update');
    console.log(this.state.items);
    }
}

markAsCompleted = (id) => {
    // Procura a tarefa pelo id
    const taskFound = this.state.items.find(task => task.id == id)
    if(taskFound){
        // Altere status completed para true
        taskFound.completed = true
        // Atualiza a lista de itens
        this.setState({
            items:[
                ...this.state.items,
                ...taskFound
            ]
        })
    }    
}

removeTask = (id) => {
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
            <button type="submit">Enviar</button>
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
