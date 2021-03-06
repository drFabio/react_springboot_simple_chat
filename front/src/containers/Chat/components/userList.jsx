import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'
import PropTypes from 'prop-types'
import getUserColorByName from 'utils/getUserColorByName'

const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
  border-left: 2px solid ${cssVars['borderColor']};
  position: relative;
  overflow-y: auto;
  padding: 1rem;
`
const Item = styled.li`
  padding: 1rem;
  margin: 0;
  margin-bottom: 0.3rem;
  list-style: none;
  text-align: left;
  color: #FFF;
  border-radius: 10px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const StyledOl = styled.ol`
  margin: 0;
  padding: 0;
`
const Title = styled.h4`
  margin-top: 0;
  text-align: center;
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
        <Title>Users</Title>
        <StyledOl>
          {this.props.users.map((userName) => {
            const backgroundColor = getUserColorByName(userName)
            return (
              <Item key={userName} style={{backgroundColor}}>
                {userName}
              </Item>
            )
          })}
        </StyledOl>
      </Container>
    )
  }
}
export default UserList
