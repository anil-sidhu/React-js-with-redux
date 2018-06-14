import { SPEED,LOGIN,LOADER,LOGOUT } from './constatnts'
// import unregister from '../Interceptor' 
// console.warn("unregister")
export const toggleTodo = (id) => (dispatch: any) => {
 setTimeout(()=>{
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
        id: data,
        isLoading:false 
      })
    })

  })
 },500)
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
  let result = fetch(url, data)
  result.then((dataJson) => {
    dataJson.json().then((data) => {
      data.loggedIn=true
      dispatch({
        type: "LOGIN",
        loginReply:true,
        isLoading:false, 
      })
    })
  })
}

export const logout = () => (dispatch: any) => {

  let store= localStorage.removeItem("loggedIn");
  dispatch({
    type: LOGOUT,
    loginReply:false  
  })
}  

export const SpeedMeter = (value) => (dispatch: any) => {
  dispatch({
    type: SPEED,
    speed: value
  })
} 

export const loader =(status)=>(dispatch:any)=>{
  
  dispatch({
    type: LOADER,
    isLoading: status
  })
}
