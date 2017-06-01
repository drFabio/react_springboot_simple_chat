import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class NameInput extends Component {
  static propTypes = {
    entering: PropTypes.bool
  }
  render () {
    return (<input disabled={this.props.entering} />)
  }
}
export default NameInput
