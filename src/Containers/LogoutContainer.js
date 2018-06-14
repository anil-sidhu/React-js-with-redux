import { connect } from 'react-redux'
import { toggleTodo, login, loader, logout } from '../Services/actions'
import LogoutComponent from '../Components/LogoutComponent'

const mapStateToProps = state => (
    {
        loginReply: state.todos.loginReply
    })

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    loader: (status) => dispatch(loader(status))
})

const Logout = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutComponent)

export default Logout;        