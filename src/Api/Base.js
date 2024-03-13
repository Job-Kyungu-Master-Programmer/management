import axios from 'axios'


const userUrl = '/api/users'
// const pubUrl  = 'http://localhost:3001/pubs'


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


export default {
    getUsers, createUser,
    updateUser
}