import { SPEED,LOGIN } from './constatnts'
// import unregister from '../Interceptor' 
// console.warn("unregister")
export const toggleTodo = (id) => (dispatch: any) => {
  const url = "http://192.168.14.126:3004/posts"
  const data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  let result = fetch(url, data)
  result.then((dataJson) => {
    dataJson.json().then((data) => {
      dispatch({ 
        type: "TOGGLE_TODO",
        id: data
      })
    })

  })
}

export const login = (params) => (dispatch: any) => {

  const url = "http://192.168.14.126:3004/posts/"+params
  const data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  console.warn("test data in action",data)
  let result = fetch(url, data)
  result.then((dataJson) => {
    dataJson.json().then((data) => {
      dispatch({
        type: "LOGIN",
        loginReply: data
      })
    })
  })
}

export const SpeedMeter = (value) => (dispatch: any) => {
  dispatch({
    type: SPEED,
    speed: value
  })
} 
