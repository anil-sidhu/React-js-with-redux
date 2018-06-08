import { SPEED } from './constatnts'

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


export const SpeedMeter = (value) => (dispatch: any) => {

  dispatch({
    type: SPEED,
    speed: value


  })
} 
