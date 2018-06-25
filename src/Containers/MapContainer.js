import { connect } from 'react-redux'
import { toggleTodo } from '../Services/actions'
import MapComponent from '../Components/MapComponent'
const mapStateToProps = state =>(
    {
      
     
})

const mapDispatchToProps = dispatch => ({
   
})

const Map = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapComponent) 

export default Map;  