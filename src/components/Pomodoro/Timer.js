import React, { Component } from 'react'
import './Timer.css'

export default class Timer extends Component{
    constructor(){
        super()
        this.state = {
            alert:{
                type:'',
                message:''
            },
            time: 0,
            btnplayDisabled: true
        }

        this.times = {
            defaultTime: 1500, //25min
            shortBreak: 300, // 5 min
            longBreak: 900 // 15 min
        }
    }

    setDefaultTime = () => {
        this.setState({
            time: this.times.defaultTime
        })
    }

    componentDidMount(){
        // Set default time when the component mounts
        this.setDefaultTime()
    }

    setTimeForWork = () => {
        this.setState({
            alert:{
                type:'work',
                message: 'Working'
            }
        })
        return this.setTime(this.times.defaultTime)
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert:{
                type:'shortBreak',
                message: 'Taking a Short Break!'
            }
        })
        return this.setTime(this.times.shortBreak)
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert:{
                type:'longBreak',
                message: 'Taking a Long Break!'
            }
        })
        return this.setTime(this.times.longBreak)
    }

    setTime = newTime => {
        this.restartInterval()

        this.setState({
            time:newTime
        })
    }

    restartInterval = () => {
        // Limpando o intervalo
        clearInterval(this.interval)
        // Executa a função countDown a cada segundo
        this.interval = setInterval(this.countDown, 1000)
    }

    countDown = () =>{
        if(this.state.time === 0){
            this.setState({
                alert:{
                    type:'buz',
                    message:'Buzzzzzzzz!'
                }
            })
        }else{
            this.setState({
                time: this.state.time - 1
            })
        }
    }

    displayTimer(seconds){
        // Formatando o time para mm:ss
        const m = Math.floor(seconds % 3600 / 60)
        const s = Math.floor(seconds % 3600 % 60)

        return `${m < 10 ? '0': ''}${m}:${s < 10 ? '0' :''}${s}`
    }

    playTime = (type) => {
        this.setState({
            btnplayDisabled:true,
            alert:{
                type,
                message: 'To Play again'
            }
        })
        // Executa a função countDown a cada segundo
        this.interval = setInterval(this.countDown, 1000)       
    }

    plauseTime = (type) => {
        this.setState({
            btnplayDisabled:false,
            alert:{
                type,
                message: 'It Paused'
            }
        })
        clearInterval(this.interval)
    }

    resetTime = (type, message) => {
        const typeFinal = type === 'work'? 'defaultTime':type
        this.setState({
            alert:{
                type: typeFinal,
                message
            },
            time: this.times[typeFinal]
        })
    }

    render() {
        const { alert: { message, type }, time} = this.state

        return (
            <div className="Pomodoro">
                <div className={`alert ${type}`}>
                    {message}
                </div>

                <div className="timer">
                    {this.displayTimer(time)}
                </div>
                <div className="types">
                    <button
                        className="start"
                        onClick={this.setTimeForWork}
                    >
                    Start Working
                    </button>
                    <button
                        className="short"
                        onClick={this.setTimeForShortBreak}
                    >
                    Short Break
                    </button>
                    <button
                        className="long"
                        onClick={this.setTimeForLongBreak}
                    >
                    Long Break
                    </button>
                </div>

                <div className="types">
                    <button disabled={this.state.btnplayDisabled}
                        className={this.state.btnplayDisabled ? 'reset' :'play'}
                        onClick={() =>this.playTime(type)}
                    >
                    Play
                    </button>
                    <button
                        className="pause"
                        onClick={() => this.plauseTime(type)}
                    >
                    Pause
                    </button>
                    <button
                        className="reset"
                        onClick={() =>this.resetTime(type, message)}
                    >
                    Reset
                    </button>
                </div>

            </div>
        )
    }
}