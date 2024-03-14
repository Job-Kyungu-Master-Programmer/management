import axios from 'axios'


const userUrl = '/api/users'
const pubUrl  = '/api/pubs'


const getUsers = () => {
    const request = axios.get(userUrl)
    return request.then(response => response.data)
}

const createUser = object => {
    const request = axios.post(userUrl, object)
    return request.then(response => response.data)
}

const updateUser = ( object, id ) => {
    const request = axios.put(`${userUrl}/${id}`,object)
    return request.then(response => response.data)
}


// Pour les pubs , publier par les utilisateurs
const getAll = () => {
    const request = axios.get(pubUrl)
    return request.then(response => response.data)   
}

const createPub = objects => {
    const request = axios.post(pubUrl, objects)
    return request.then(response => response.data)
}

const updatePub = ( object, id ) => {
    const request = axios.put(`${pubUrl}/${id}`,object)
    return request.then(response => response.data)
}

const delet = ( id,newObject) => {
    const request = axios.delete(`${pubUrl}/${id}`,newObject)
    return request.then(response => response.data)
}

const likes = ( object, id ) => {
    const request = axios.put(`${pubUrl}/${id}`, object)
    return request.then(response => response.data)
}


export default {
    getUsers,
    createUser,
    updateUser,
    getAll,
    createPub,
    updatePub,
    delet,
    likes
}