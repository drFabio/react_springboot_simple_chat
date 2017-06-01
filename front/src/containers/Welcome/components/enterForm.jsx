import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NameInput} from './nameInput'
import {EnterButton} from './enterButton'

export class EnterForm extends Component {
  static propTypes = {
    entering: PropTypes.bool
  }
  render () {
    return (
      <div>
        <NameInput entering={this.props.entering} />
        <EnterButton entering={this.props.entering} />
      </div>
    )
  }
}
export default EnterForm
