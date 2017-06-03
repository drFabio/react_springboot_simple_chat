import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'elements'
export class NameInput extends Component {
  static propTypes = {
    entering: PropTypes.bool
  }
  render () {
    return (
      <Input
        disabled={this.props.entering}
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={'Name to use on chat'}
      />
    )
  }
}
export default NameInput
