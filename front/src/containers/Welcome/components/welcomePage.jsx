import React, {Component} from 'react'
import {EnterForm} from './enterForm'
import PropTypes from 'prop-types'
import {ErrorMessage} from './errorMessage'
import {Title, Card} from 'elements'

export class WelcomePage extends Component {
  static propTypes = {
    onEnterChat: PropTypes.func.isRequired,
    entering: PropTypes.bool,
    error: PropTypes.string
  }
  render () {
    let errorElement = null
    if (this.props.error) {
      errorElement = (
        <ErrorMessage>
          {this.props.error}
        </ErrorMessage>
      )
    }
    return (
      <Card>
        <Title>Welcome to the chat example</Title>
        {errorElement}
        <EnterForm
          onEnterChat={this.props.onEnterChat}
          entering={this.props.entering}
        />
      </Card>
    )
  }
}
export default WelcomePage
