// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {TimeInMinutes: 0, TimeElapsedSeconds: 0}

  onClickStart = () => {
    const setTimer = () => {
      this.setState(prevState => ({
        TimeElapsedSeconds: prevState.TimeElapsedSeconds + 1,
      }))
    }
    this.setState(prevState => ({IsTimeRunning: !prevState.IsTimeRunning}))
    this.TimerID = setInterval(setTimer, 1000)
  }

  onClickStop = () => {
    clearInterval(this.TimerID)
  }

  onClickReset = () => {
    clearInterval(this.TimerID)
    this.setState({TimeInMinutes: 0, TimeElapsedSeconds: 0})
  }

  getTimeFormat = () => {
    const {TimeInMinutes, TimeElapsedSeconds} = this.state
    const totalSeconds = TimeInMinutes * 60 + TimeElapsedSeconds
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    const minStringified = minutes > 9 ? minutes : `0${minutes}`
    const secStringified = seconds > 9 ? seconds : `0${seconds}`
    return `${minStringified}:${secStringified}`
  }

  render() {
    return (
      <div className="app-container">
        <div className="timer-card-container">
          <h1 className="Title">Stopwatch</h1>
          <div className="timer-display-operations-card">
            <div className="timer-img-card">
              <img
                className="timer-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-name">Timer</p>
            </div>

            <h1 className="timer">{this.getTimeFormat()}</h1>
            <div className="buttons-card">
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
