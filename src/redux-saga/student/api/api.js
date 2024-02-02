import axios from "axios"
import { BASE_URL, DELETE_STUDENT, GET_STUDENT, POST_STUDENT, UPDATE_STUDENT } from "../../constant"

export const GetStudent = () => {
    return axios.get(BASE_URL + GET_STUDENT).then((res) => {
        const data = res.data.data
        const status = res.status
        return {
            data, status
        }
    })
}

export const PostStudent = (action) => {
    return axios.post(BASE_URL + POST_STUDENT, action.payload).then((res) => {
        const data = res.data.data.student
        const status = res.status
        console.log(res);
        return {
            data, status
        }
    })
}

// delete

export const DeleteStudent = (action) => {
    return axios.delete(BASE_URL + DELETE_STUDENT + action.payload).then((res) => {
        const data = action.payload
        const status = res.status
        console.log(res);
        return {
            data, status
        }
    })
}

// update

export const UpdateStudent = (action) => {
    
    return axios.put(BASE_URL + UPDATE_STUDENT + action.payload._id, `${action.payload.student_name}` ).then((res) => {
        const data = action.payload
        const status = res.status
        return {
        data, status
        }
    }).catch((error) => console.log(error))
}
