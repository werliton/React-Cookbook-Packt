import React, { Component } from 'react'
import Result from './Result'
import './Numbers.css'

export default class Numbers extends Component {
    state = {
        numbers:'', // Aqui serão salvos os valores de entrada
        results:[] //Serão salvos os resultados
    }

    handleNumberChange = e => {
        const {target: {value}} = e
        // Convertendo o valor de string para array
        // Ex: 123456 => [1,2,3,4,5,6]
        const numbers = Array.from(value)
        // Soma todos os valores do array
        const results = numbers.reduce((a,b) => Number(a) + Number(b))

        this.setState({
            numbers: value,
            results: [...this.state.results, results]
        })

    }

    render() {
        return (
        <div className="Numbers">
            <input
                type="number"
                value={this.state.numbers}
                onChange={this.handleNumberChange}
            />
            {/* Rendering the results array */}
            <ul>
                {this.state.results.map((result, i) => (
                    <Result key={i} result={result} />
                ))}
            </ul>
        </div>
        )
    }
}
