import { connect } from 'react-redux'
import { toggleTodo,login,loader } from '../Services/actions'
import LoginComponent from '../Components/LoginComponent'
const mapStateToProps = state =>(
    {
        loginReply: state.todos.loginReply
    
})

const mapDispatchToProps = dispatch => ({
    login: (params) => dispatch(login(params)),
    loader: (status) => dispatch(loader(status))
})
 
const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent) 
 
export default Login;       