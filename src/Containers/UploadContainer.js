import { connect } from 'react-redux'
import { toggleTodo,SpeedMeter,loader } from '../Services/actions'
import UploadComponent from '../Components/UploadComponent'
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

const Upload = connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadComponent) 

export default Upload;  