import { SPEED,LOGIN,LOADER,LOGOUT } from './constatnts'

const initialState = {
  id: [],
  speed: 10,
  login:'',
  isLoading:'',
  loginReply:'',
}

export default function todos(state = initialState, action) {
  console.warn("action",action.loginReply) 
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
    default:
      return state
  }
}

