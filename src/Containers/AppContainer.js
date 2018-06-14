import { connect } from 'react-redux'
import { toggleTodo, login,loader } from '../Services/actions'
import AppComponent from '../App'
const mapStateToProps = state => (
    {
        isLoading: state.todos.isLoading,
        loginReply: state.todos.loginReply
    })
const mapDispatchToProps = dispatch => ({
    loader: (status) => dispatch(loader(status))
})

const App = connect(
    mapStateToProps, 
    mapDispatchToProps
)(AppComponent)

export default App;     