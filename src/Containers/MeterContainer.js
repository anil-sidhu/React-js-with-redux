import { connect } from 'react-redux'
import { toggleTodo } from '../Services/actions'
import MeterComponent from '../Components/MeterComponent'
const mapStateToProps = state =>(
    {
        speedReply: state.todos.speedReply
    
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})

const Meter = connect(
    mapStateToProps,
    mapDispatchToProps
)(MeterComponent) 

export default Meter;  