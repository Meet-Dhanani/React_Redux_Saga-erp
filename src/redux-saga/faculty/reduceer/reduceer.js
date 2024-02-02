import { DELETE_FACULTY_ERROR, DELETE_FACULTY_PROGRESS, DELETE_FACULTY_SUCCESS, GET_FACULTY_ERROR, GET_FACULTY_PROGRESS, GET_FACULTY_SUCCESS, POST_FACULTY_ERROR, POST_FACULTY_PROGRESS, POST_FACULTY_SUCCESS, UPDATE_FACULTY_ERROR, UPDATE_FACULTY_PROGRESS, UPDATE_FACULTY_SUCCESS, } from "../action/action"

const initialstate = {
    faculty: [],
    isError: null,
    isLoading: false,
}

const facultyReducer = (state = initialstate, action) => {
    switch (action.type) {
        // get  faculty
        case GET_FACULTY_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_FACULTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                faculty: action.data
            }
        }
        case GET_FACULTY_ERROR: {
            return {
                ...state,
                isError: true
            }
        }

        // post subadmin

        case POST_FACULTY_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case POST_FACULTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                faculty: state.faculty.concat(action.data)
            }
        }
        case POST_FACULTY_ERROR: {
            return {
                ...state,
                isError: true
            }
        }

        // delete faculty 


        case DELETE_FACULTY_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        
        case DELETE_FACULTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                faculty: state.faculty.filter((val) => val._id !== action.data),
            }
        }

        case DELETE_FACULTY_ERROR: {
            return {
                ...state,
                isError: true
            }
        }

        // update 

        case UPDATE_FACULTY_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        
        case UPDATE_FACULTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                faculty: state.faculty.map((val)=>{
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

        case UPDATE_FACULTY_ERROR: {
            return {
                ...state,
                isError: true
            }
        }

        default: {
            return {
                ...state
            }
        }
    }

}

export default facultyReducer