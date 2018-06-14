import { connect } from 'react-redux'
import { toggleTodo,login,loader,logout } from '../Services/actions'
import LoginComponent from '../Components/LoginComponent'
import NavbarComponent from '../Components/NavbarComponent'

const mapStateToProps = state =>(
    {
        loginReply: state.todos.loginReply
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    loader: (status) => dispatch(loader(status))
})
  
const Navbar = connect(
    mapStateToProps, 
    mapDispatchToProps
)(NavbarComponent) 
 
export default Navbar;        