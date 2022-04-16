import axios from "axios";
import AuthAPI from "./auth_utils";
const ToDoAPI = {}
const BASE_URL = '/api/'

// const getCSRFToken = ()=>{
//     let csrfToken

//     console.log(document.cookie)
//     // the browser's cookies for this page are all in one string, separated by semi-colons
//     const cookies = document.cookie.split(';')
//     for ( let cookie of cookies ) {
//         console.log(cookie)
//         // individual cookies have their key and value separated by an equal sign
//         const crumbs = cookie.split('=')
//         if ( crumbs[0].trim() === 'csrftoken') {
//             csrfToken = crumbs[1]
//         }
//     }
//     return csrfToken
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

ToDoAPI.fetchAllLists = async () => {
    return await tryCatchFetch(() => axios.get(`${BASE_URL}lists/`, AuthAPI.getCsrfConfig()))
}

ToDoAPI.fetchOneList = async (listId) => {
    return await tryCatchFetch(() => axios.get(`${BASE_URL}lists/${listId}`, AuthAPI.getCsrfConfig()))
}

ToDoAPI.fetchTask = async (taskId) => {
    return await tryCatchFetch(() => axios.get(`${BASE_URL}tasks/${taskId}`, AuthAPI.getCsrfConfig()))
}

ToDoAPI.newList = async (listName) => {
    return await tryCatchFetch(() => axios.post(`${BASE_URL}lists/`, {'name': listName}, AuthAPI.getCsrfConfig()));
};

ToDoAPI.deleteList = async (listId) => {
    return await tryCatchFetch(() => axios.delete(`${BASE_URL}lists/${listId}`, AuthAPI.getCsrfConfig()))
}

ToDoAPI.newTask = async (data) => {
    return await tryCatchFetch(() => axios.post(`${BASE_URL}tasks/`, data, AuthAPI.getCsrfConfig()))
}

ToDoAPI.deleteTask = async (taskId) => {
    return await tryCatchFetch(() => axios.delete(`${BASE_URL}tasks/${taskId}/`, AuthAPI.getCsrfConfig()))
}

ToDoAPI.changeTaskComplete = async (taskId, data) => {
    return await tryCatchFetch(() => axios.patch(`${BASE_URL}tasks/${taskId}/`, data, AuthAPI.getCsrfConfig()))
}

export default ToDoAPI