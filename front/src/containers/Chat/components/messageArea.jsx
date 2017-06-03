import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Message} from './message'

export class MessageArea extends Component {
  static propTypes = {
    messages: PropTypes.array
  }
  render () {
    let index = 0
    return (
      <div>
        {this.props.messages.map((message) => {
          const key = `message_${index++}`
          return (
            <Message key={key}>
              {message}
            </Message>
          )
        })}
      </div>
    )
  }
}
