import { SPEED,LOGIN,LOADER,LOGOUT,LAZYLOAD } from './constatnts'

const initialState = {
  id: [],
  speed: 10,
  login:'',
  isLoading:'',
  loginReply:!!localStorage.getItem('loggedIn'),
  lazyLoadReply:'',
  isLazyLoading:false
  
}

export default function todos(state = initialState, action) {
  // console.warn("action",action.lazyLoadReply) 
  switch (action.type) {
    case 'TOGGLE_TODO':
      return {
        ...state,
        id: action.id,
        isLoading: action.isLoading, 
      }
    case SPEED:
      return {
        ...state,
        speedReply: action.speed,
      }
      case LOGIN:
      return {
        ...state,
        loginReply: action.loginReply,
        isLoading: action.isLoading,

      }
      case LOGOUT:
      return {
        
        ...state,
        loginReply: action.loginReply,
        isLoading: action.isLoading,

      }
      case LOADER:
      return {
        ...state,
        isLoading: action.isLoading,

      }
      case LAZYLOAD:
      return {
        ...state,
        isLoading: action.isLoading,
        lazyLoadReply:action.lazyLoadReply,
        isLazyLoading:action.isLazyLoading,

      }
    default:
      return state
  }
}

