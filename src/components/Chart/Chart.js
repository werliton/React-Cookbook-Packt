import React, { Component } from 'react'
import c3 from 'c3'
import './Chart.css'

export default class Chart extends Component {
    componentDidMount(){
        /**
         * Quando o component eh montado a primeira vez nós atualizamos o grafico
         */
      this.updateChart()
    }

    componentDidUpdate(){
        // Quando é recebido uma nova propriedade o grafico eh atualizado
        this.updateChart()
    }

    updateChart(){
        c3.generate({
            bindto: '#chart',
            data:{
                columns: this.props.columns,
                type: this.props.chartType
            }
        })
    }
    

    render() {
        return <div id="chart"></div>
    }
}
