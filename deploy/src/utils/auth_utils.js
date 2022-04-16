import axios from "axios"
import Cookie from "js-cookie"

const AuthAPI = {}
const BASE_URL = '/api/'

// added for authentication
AuthAPI.getCsrfConfig = () => {
  return { 
    withCredentials: true, 
    headers: {
      'X-CSRFToken': Cookie.get("csrftoken")
    }
  }
}

// const getCSRFToken = ()=>{
//   let csrfToken

//   console.log(document.cookie)
//   // the browser's cookies for this page are all in one string, separated by semi-colons
//   const cookies = document.cookie.split(';')
//   for ( let cookie of cookies ) {
//       console.log(cookie)
//       // individual cookies have their key and value separated by an equal sign
//       const crumbs = cookie.split('=')
//       if ( crumbs[0].trim() === 'csrftoken') {
//           csrfToken = crumbs[1]
//       }
//   }
//   return csrfToken
// }
// axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

const tryCatchFetch = async (axiosCall) => {
    try {
        const response = await axiosCall()
        return response.data
    }
    catch (e) {
        console.log('tryCatchFetch ERROR:', e)
        return null
    }
}

AuthAPI.logIn = async (loginData) => {
    return await tryCatchFetch(()=> axios.post(`${BASE_URL}login/`, loginData, AuthAPI.getCsrfConfig()))
}

AuthAPI.signUp = async (signupData) => {
  let newUser = await tryCatchFetch(()=> axios.post(`${BASE_URL}users/`, signupData, AuthAPI.getCsrfConfig()))
  if (newUser){
    return await AuthAPI.logIn(signupData)
  }
}

AuthAPI.logOut = async (setUser) => {
    const response = await tryCatchFetch(() => axios.post(`${BASE_URL}logout/`, null, AuthAPI.getCsrfConfig()))
    if (response){
        setUser("")
    }
}

AuthAPI.whoAmI = async (setUser)=>{
  const response = await tryCatchFetch(() => axios.get(`${BASE_URL}whoami/`, AuthAPI.getCsrfConfig()))
  if (response){
    console.log('WHO AM I:', response)
    setUser(response.user)
  }
}

export default AuthAPI