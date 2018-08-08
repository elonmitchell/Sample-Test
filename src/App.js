import React, { Component } from 'react'
import './App.css'
import Fibonacci from './lib/Fibonacci'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sequence: [],
      sumOfEvens: 0,
      maxLimit: 0,
    }
  }

  /**
   * calculate the Fibonacci numbers and the sum of even-valued terms.
   * 
   */
  calculate() {
    if (this.state.maxLimit > 0) {
      const fibo = new Fibonacci()
      fibo.generate(this.state.maxLimit)
      this.setState({
        sequence: fibo.sequence,
        sumOfEvens: fibo.sumOfEvens
      })
    }
  }

  render() {
    const { maxLimit, sequence, sumOfEvens } = this.state
    return (
      <div className="container">
        <div className="header">
          <h1>Fibonacci Calculator</h1>
        </div>
        <div className="content">
          <div className="row">
            <label>Limit number:</label>
            <input className="limitNumber" value={maxLimit} onChange={e => this.setState({maxLimit: e.target.value})} />
          </div>
          <div className="row">
            <button className="action" onClick={() => this.calculate()}>Calculate</button>
          </div>
          <div className="row">
            <label>Sum of even-valued terms:</label>
            <span className="sumOfEvents">{sumOfEvens}</span>
          </div>
          <div className="row">
            <label>Fibonacci numbers:</label>
            <textarea className="numbers" readOnly={true} value={sequence.join(', ')}/>
          </div>
        </div>
      </div>
    )
  }
}
