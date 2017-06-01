import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class EnterButton extends Component {
  static propTypes = {
    entering: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }
  render () {
    const {entering} = this.props
    const label = (entering ? 'Entering ...' : 'Enter')
    return (
      <button disabled={entering} onClick={this.props.onClick}>
        {label}
      </button>
    )
  }
}
export default EnterButton
