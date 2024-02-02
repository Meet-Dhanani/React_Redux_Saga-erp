import { DELETE_STUDENT_ERROR, DELETE_STUDENT_PROGRESS, DELETE_STUDENT_SUCCESS, GET_STUDENT_ERROR, GET_STUDENT_PROGRESS, GET_STUDENT_SUCCESS, POST_STUDENT_ERROR, POST_STUDENT_PROGRESS, POST_STUDENT_SUCCESS, UPDATE_STUDENT_ERROR, UPDATE_STUDENT_PROGRESS, UPDATE_STUDENT_SUCCESS } from "../action/action"

const initialstate={
    student:[],
    isLoding:false,
    isError:null,
}

const studentReducer=(state=initialstate,action)=>{
    switch(action.type){
        case GET_STUDENT_PROGRESS:{
            return{
                ...state,
                isLoding:true
            }
        }

        case GET_STUDENT_SUCCESS:{
            return{
                ...state,
                isLoding:false,
                student:action.data
            }
        }

        case GET_STUDENT_ERROR:{
            return{
                ...state,
                isError:true
            }
        }

        // post student


        case POST_STUDENT_PROGRESS:{
            return{
                ...state,
                isLoding:true
            }
        }

        case POST_STUDENT_SUCCESS:{
            return{
                ...state,
                isLoding:false,
                student:state.student.concat(action.data)
            }
        }

        case POST_STUDENT_ERROR:{
            return{
                ...state,
                isError:true
            }
        }

        // delete data 

        case DELETE_STUDENT_PROGRESS:{
            return{
                ...state,
                isLoding:true
            }
        }

        case DELETE_STUDENT_SUCCESS:{
            return{
                ...state,
                isLoding:false,
                student:state.student.filter((e)=>e._id!==action.data)
            }
        }

        case DELETE_STUDENT_ERROR:{
            return{
                ...state,
                isError:true
            }
        }

        // update student 

        case UPDATE_STUDENT_PROGRESS:{
            return{
                ...state,
                isLoding:true
            }
        }

        case UPDATE_STUDENT_SUCCESS:{
            return{
                ...state,
                isLoding:false,
                student:state.student.map((val)=>{
                    console.log(val);
                    if(val._id===action.data._id){
                        return{
                            ...val,...action.data
                        }
                    }
                    else{
                        return val
                    }
                }),
            }
        }

        case UPDATE_STUDENT_ERROR:{
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

export default studentReducer