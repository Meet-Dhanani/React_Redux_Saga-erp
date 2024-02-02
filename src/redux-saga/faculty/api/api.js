import axios from "axios";
import { BASE_URL, DELETE_FACULTY, GET_FACULTY, POST_FACULTY, UPDATE_FACULTY } from "../../constant";

export const GetFaculty = () => {
    return axios.get(BASE_URL + GET_FACULTY).then((res) => {
        const data = res.data.data
        const status = res.status

        return {
            data, status
        }
    }).catch((e) => {
        console.log(e);
    })
}
// post faculty
export const PostFaculty = (action) => {
    return axios.post(BASE_URL + POST_FACULTY, action.payload).then((res) => {
        const data = res.data.data.faculty
        const status = res.status

        console.log(res, "post faculty");

        return {
            data, status
        }
    })
}

// delete faculty

export const DeleteFaculty = (action) => {
    console.log("deleet", action.payload);
    return axios.delete(BASE_URL + DELETE_FACULTY + action.payload).then((res) => {
        //  const data=res.data.data.faculty
        const data = action.payload
        const status = res.status


        return {
            data,
            status
        }
    })
}

// update 

export const UpdateFaculty = (action) => {
    console.log(action);
    return axios.put(BASE_URL + UPDATE_FACULTY + action.payload._id,action.payload).then((res) => {
        console.log(res);
        const data = action.payload
        const status = res.status
        return {
            data,
            status
        }
    })
}