import { DELETE_SUBADMIN_ERROR, DELETE_SUBADMIN_PROGRESS, DELETE_SUBADMIN_SUCCESS, GET_SUBADMIN_LIST_ERROR, GET_SUBADMIN_LIST_PROGRESS, GET_SUBADMIN_LIST_SUCCESS, POST_SUBADMIN_ERROR, POST_SUBADMIN_PROGRESS, POST_SUBADMIN_SUCCESS, UPDATE_SUBADMIN_ERROR, UPDATE_SUBADMIN_PROGRESS, UPDATE_SUBADMIN_SUCCESS } from "../action/action"

const initialstate={
    subadmin:[],
    isError:null,
    isLoading:false,
}

const subadminReducer=(state=initialstate,action)=>{
    console.log(action);
    switch(action.type){
        // get subadmin
        case GET_SUBADMIN_LIST_PROGRESS:{
            return{
                ...state,
                isLoading:true
            }
        }
        case GET_SUBADMIN_LIST_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                subadmin:action.data
            }
        }
        case GET_SUBADMIN_LIST_ERROR:{
            return{
                ...state,
                isError:true
            }
        }
        // post subadmin
        case POST_SUBADMIN_PROGRESS:{
            return{
                ...state,
                isLoading:true
            }
        }
        case POST_SUBADMIN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                subadmin:state.subadmin.concat(action.data)
            }
        }
        case POST_SUBADMIN_ERROR:{
            return{
                ...state,
                isError:true
            }
        }

        // delete data 

        case DELETE_SUBADMIN_PROGRESS:{
            return{
                ...state,
                isLoading:true
            }
        }
        case DELETE_SUBADMIN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                subadmin:state.subadmin.filter((e)=>e._id!==action.data)
            }
        }
        case DELETE_SUBADMIN_ERROR:{
            return{
                ...state,
                isError:true
            }
        }

        // update data

        case UPDATE_SUBADMIN_PROGRESS:{
            return{
                ...state,
                isLoading:true
            }
        }
        case UPDATE_SUBADMIN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                subadmin:state.subadmin.map((val)=>{
                    console.log(val);
                    console.log(action.data);
                    if(val._id===action.data._id){
                        // console.log("yes");
                        return{
                            ...val,...action.data
                        }
                    }
                    else{
                        // console.log("no");
                        return val
                    }
                }),
            }
        }
        case UPDATE_SUBADMIN_ERROR:{
            return{
                ...state,
                isError:true
            }
        }

        default:{
            return{
                ...state
            }
        }
    }

}

export default subadminReducer