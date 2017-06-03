import React, {Component} from 'react'

export class MessageInput extends Component {
  render () {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={'Message ...'}
      />
    )
  }
}
export default MessageInput
