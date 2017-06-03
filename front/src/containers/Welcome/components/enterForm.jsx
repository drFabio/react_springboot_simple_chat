import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NameInput} from './nameInput'
import {EnterButton} from './enterButton'
import {Card} from 'elements'
export class EnterForm extends Component {
  static propTypes = {
    entering: PropTypes.bool,
    onEnterChat: PropTypes.func
  }
  state = {
    chatName: ''
  }
  onEnterButton = () => {
    this.props.onEnterChat(this.state.chatName)
  }
  handleChange = (ev) => {
    const chatName = ev.target.value
    this.setState({chatName})
  }
  render () {
    return (
      <Card>
        <NameInput
          entering={this.props.entering}
          value={this.state.chatName}
          onChange={this.handleChange}
        />
        <EnterButton entering={this.props.entering} onClick={this.onEnterButton} />
      </Card>
    )
  }
}
export default EnterForm
