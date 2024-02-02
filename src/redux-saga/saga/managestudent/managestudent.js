import { call, put } from "redux-saga/effects";
import { DeleteStudent, GetStudent, PostStudent, UpdateStudent } from "../../student/api/api";
import { DELETE_STUDENT_ERROR, DELETE_STUDENT_SUCCESS, GET_STUDENT_ERROR, GET_STUDENT_SUCCESS, POST_STUDENT_ERROR, POST_STUDENT_SUCCESS, UPDATE_STUDENT_ERROR, UPDATE_STUDENT_SUCCESS } from "../../student/action/action";
import Swal from "sweetalert2";

export function* handlegetstudent(action) {
    try {
        const res = yield call(GetStudent, action)
        const data = res.data
        const status = res.status

        if (status === 200 || status === 201) {
            yield put({ type: GET_STUDENT_SUCCESS, data })
        } else {
            yield put({ type: GET_STUDENT_ERROR, data })
        }
    } catch (error) {
        yield put({ type: GET_STUDENT_ERROR, error })
    }
}
// post data 
export function* handlepoststudent(action) {
    try {
        const res = yield call(PostStudent, action)
        const data = res.data
        const status = res.status

        if (status === 200 || status === 201) {
            Swal.fire({
                title: "Student Added Succesfully",
                text: "This Student added succesfully ",
                icon: "success"
            })
            yield put({ type: POST_STUDENT_SUCCESS, data })
        } else {
            yield put({ type: POST_STUDENT_ERROR, data })
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
        yield put({ type: POST_STUDENT_ERROR, error })
    }
}

// delete data 

export function* handledeletestudent(action) {
    try {
        const res = yield call(DeleteStudent, action)
        const data = res.data
        const status = res.status
        if (status === 200 || status === 201) {
            Swal.fire({
                title: "Student Deleted Succesfully",
                text: "This Student Deleted succesfully ",
                icon: "success"
            })
            yield put({ type: DELETE_STUDENT_SUCCESS, data })
        } else {
            yield put({ type: DELETE_STUDENT_ERROR, data })
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
        yield put({ type: DELETE_STUDENT_ERROR, error })
    }
}


// update 


export function* handleupdatestudent(action) {
    try {
        const res = yield call(UpdateStudent, action)
        const data = res.data
        const status = res.status
        if (status === 200 || status === 201) {
            Swal.fire({
                title: "Student Updated Succesfully",
                text: "This Student Updates succesfully ",
                icon: "success"
            })
            yield put({ type: UPDATE_STUDENT_SUCCESS, data })
        } else {
            yield put({ type: UPDATE_STUDENT_ERROR, data })
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
        yield put({ type: UPDATE_STUDENT_ERROR, error })
    }
}