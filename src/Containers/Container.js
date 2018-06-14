import { connect } from 'react-redux'
import { toggleTodo,SpeedMeter,loader } from '../Services/actions'
import RedComponent from '../Components/Component'
const mapStateToProps = state =>(

    {
    todos: state.todos.id,
    isLoading: state.todos.isLoading
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    SpeedMeter: (data) => dispatch(SpeedMeter(data)),
    loader: (status) => dispatch(loader(status))
    
})

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(RedComponent) 

export default Container;  