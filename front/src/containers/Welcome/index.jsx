import { connect } from 'react-redux'
import actions from './actions'
import {WelcomePage} from './components'

function mapStateToProps (state) {
  const myState = state.welcome
  return {
    entering: myState.get('entering'),
    error: myState.get('error')
  }
}
function mapDispatchToProps (dispatch, ownProps) {
  return {
    onEnterChat (name) {
      dispatch(actions.enterChat(name))
    }
  }
}
export const Welcome = connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
export default Welcome
