import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'elements'
export class EnterButton extends Component {
  static propTypes = {
    entering: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }
  render () {
    const {entering} = this.props
    const label = (entering ? 'Entering ...' : 'Enter')
    return (
      <Button disabled={entering} onClick={this.props.onClick}>
        {label}
      </Button>
    )
  }
}
export default EnterButton
