import {SPEED} from './constatnts'

const initialState={
  id:[],
  speed:10,
}

export default function todos(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_TODO':
      return  { ...state,
          id: action.id,
         
        }  
        case SPEED:
        return  { ...state,
            speedReply: action.speed,
           
          } 
      default: 
        return state
    }
  }
