import axios from "axios"
import { BASE_URL, DELETE_SUBADMIN, GET_SUBADMIN, POST_SUBADMIN, UPDATE_SUBADMIN } from "../../constant"

export const GetSubadmin=()=>{
    return axios.get(BASE_URL+GET_SUBADMIN).then((res)=>{
        const data=res.data.data
        const status=res.status

        console.log(data);
        return{
            data,status
        }
    }).catch((e)=>{
        console.log(e);
    })
}

export const PostSubadmin=(action)=>{
    return axios.post(BASE_URL+POST_SUBADMIN,action.payload).then((res)=>{
        console.log(res);
        const data=res.data.data.subadmin
        const status=res.status
        return{
            data,status
        }
    }).catch((e)=>{
        console.log(e);
    })
}

export const DeleteSubadmin=(action)=>{
    return axios.delete(BASE_URL+DELETE_SUBADMIN+action.payload).then((res)=>{
        const data=action.payload
        const status=res.status
        return{
            data,status
        }
    }).catch((e)=>{
        console.log(e);
    })
}

export const UpdateSubadmin=(action)=>{
    return axios.put(BASE_URL+UPDATE_SUBADMIN+action.payload.update._id,action.payload.newdata).then((res)=>{
        
        const data=action.payload.newdata
        const status=res.status
        console.log(data);
        return{
            data,status
        }
    }).catch((e)=>{
        console.log(e);
    })
}