import { connect } from 'react-redux'
import { toggleTodo,SpeedMeter } from '../Services/actions'
import RedComponent from '../Components/Component'
const mapStateToProps = state =>(

    {
    todos: state.todos.id
    
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    SpeedMeter: (data) => dispatch(SpeedMeter(data))
})

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(RedComponent) 

export default Container; 