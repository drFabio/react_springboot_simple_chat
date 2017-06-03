import React, {Component} from 'react'

export class Message extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Message
