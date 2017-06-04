import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NameInput} from './nameInput'
import {EnterButton} from './enterButton'
import {checkEnter} from 'utils/checkEnter'
export class EnterForm extends Component {
  static propTypes = {
    entering: PropTypes.bool,
    onEnterChat: PropTypes.func
  }
  state = {
    chatName: ''
  }
  onEnterButton = () => {
    this.props.onEnterChat(this.state.chatName.trim())
  }
  handleChange = (ev) => {
    const chatName = ev.target.value
    this.setState({chatName})
  }
  onCheckKey = (e) => {
    if (checkEnter(e)) {
      this.onEnterButton()
    }
  }
  render () {
    return (
      <div>
        <NameInput
          entering={this.props.entering}
          value={this.state.chatName}
          onChange={this.handleChange}
          onKeyUp={this.onCheckKey}
        />
        <EnterButton entering={this.props.entering} onClick={this.onEnterButton} />
      </div>
    )
  }
}
export default EnterForm
