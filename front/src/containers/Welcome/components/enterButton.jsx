import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'elements'
import styled from 'styled-components'
const StyledButton = styled(Button)`
  padding-left:2em;
  padding-right:2em;
  font-size: 1.5rem;
  margin-top: 2rem;
`
export class EnterButton extends Component {
  static propTypes = {
    entering: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }
  render () {
    const {entering} = this.props
    const label = (entering ? 'Entering ...' : 'Enter')
    return (
      <StyledButton disabled={entering} onClick={this.props.onClick}>
        {label}
      </StyledButton>
    )
  }
}
export default EnterButton
