import { connect } from 'react-redux'
import { toggleTodo, login, loader, logout } from '../Services/actions'
import ValidationComponent from '../Components/ValidationComponent'

const mapStateToProps = state => (
    {
        loginReply: state.todos.loginReply
    })

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    loader: (status) => dispatch(loader(status))
})

const Validation = connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidationComponent)

export default Validation;        