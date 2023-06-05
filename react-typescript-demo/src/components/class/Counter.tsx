import { Component } from 'react'

export default class Counter extends Component {
    state: {
        count: 0
    }

    handleClick(){
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.state.count}
      </div>
    )
  }
}
