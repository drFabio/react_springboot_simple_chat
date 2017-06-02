import React, {Component} from 'react'
import {EnterForm} from './enterForm'
export class WelcomePage extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to the chat example</h1>
        <EnterForm
          onEnterChat={this.props.onEnterChat}
          entering={this.props.entering}
        />
      </div>
    )
  }
}
export default WelcomePage
