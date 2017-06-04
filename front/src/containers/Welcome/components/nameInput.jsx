import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'elements'
export class NameInput extends Component {
  static propTypes = {
    entering: PropTypes.bool
  }
  render () {
    const {entering, value, onChange, ...other} = this.props
    return (
      <Input
        disabled={entering}
        value={value}
        onChange={onChange}
        placeholder={'Name to use on chat'}
        {...other}
      />
    )
  }
}
export default NameInput
