import { connect } from 'react-redux'
import { lazyLoad,loader } from '../Services/actions'
import LazyLoadComponent from '../Components/LazyLoadComponent'
const mapStateToProps = state => (
    {
        isLoading: state.todos.isLoading,
        lazyLoadReply: state.todos.lazyLoadReply
    })
const mapDispatchToProps = dispatch => ({
    lazyLoad: (params) => dispatch(lazyLoad(params))
})

const LazyLoad = connect(
    mapStateToProps, 
    mapDispatchToProps
)(LazyLoadComponent)

export default LazyLoad;      