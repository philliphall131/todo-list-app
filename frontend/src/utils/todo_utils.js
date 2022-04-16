import axios from "axios";
import AuthAPI from "./auth_utils";
const ToDoAPI = {}
const BASE_URL = 'http://localhost:8000/todo/'

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