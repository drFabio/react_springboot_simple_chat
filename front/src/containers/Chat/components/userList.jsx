import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'
import PropTypes from 'prop-types'

const Container = styled.ol`
  width: 100%;
  height: 100%;
  margin: 0;
  border-left: 2px solid ${cssVars['borderColor']};
`
const Item = styled.li`
  padding: 1rem;
  border-top: 2px solid ${cssVars['borderColor']};
  border-bottom: 2px solid ${cssVars['borderColor']};
  list-style: none;
  text-align: left;
  &:first-child {
    border-top: 0;
  }
  &:last-child{
    border-bottom: 0;
  }
`
export class UserList extends Component {
  static propTypes = {
    users: PropTypes.array
  }
  static defaultProps = {
    users: []
  }
  render () {
    return (
      <Container>
        {this.props.users.map((userName) => {
          return (
            <Item key={userName}>
              {userName}
            </Item>
          )
        })}
      </Container>
    )
  }
}
export default UserList
