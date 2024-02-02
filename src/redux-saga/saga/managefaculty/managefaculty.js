import { call, put } from "redux-saga/effects"
import { DeleteFaculty, GetFaculty, PostFaculty, UpdateFaculty } from "../../faculty/api/api"
import { DELETE_FACULTY_ERROR, DELETE_FACULTY_SUCCESS, GET_FACULTY_ERROR, GET_FACULTY_SUCCESS, POST_FACULTY_ERROR, POST_FACULTY_SUCCESS, UPDATE_FACULTY_ERROR, UPDATE_FACULTY_SUCCESS } from "../../faculty/action/action"
import Swal from "sweetalert2"


export function* handleGetfaculty(action) {
    try {
        const res = yield call(GetFaculty, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            yield put({ type: GET_FACULTY_SUCCESS, data })
        }
        else {
            yield put({ type: GET_FACULTY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: GET_FACULTY_ERROR, e })
    }
}
// post faculty
export function* handlePostfaculty(action) {
    try {
        const res = yield call(PostFaculty, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            Swal.fire({
                title: "Faculty Added Succesfully",
                text: "This faculty added succesfully ",
                icon: "success"
            });
            yield put({ type: POST_FACULTY_SUCCESS, data })
        }
        else {
            yield put({ type: POST_FACULTY_ERROR, data })
        }
    } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
        yield put({ type: POST_FACULTY_ERROR, e })
    }
}

// delete faculty

export function* handleDeletefaculty(action) {
    try {
        const res = yield call(DeleteFaculty, action)
        const data = res.data
        const status = res.status
        console.log(data, "manage");

        if (status === 200) {
            Swal.fire({
                title: "Delete Faculty",
                text: "This Faculty Deleted successfully",
                icon: "success",
                dangerMode: true,
            })
            yield put({ type: DELETE_FACULTY_SUCCESS, data })
        }
        else {
            yield put({ type: DELETE_FACULTY_ERROR, data })
        }
    } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
        yield put({ type: DELETE_FACULTY_ERROR, e })
    }
}

export function* handleUpdatefaculty(action) {
    try {
        const res = yield call(UpdateFaculty, action)
        const data = res.data
        const status = res.status
        console.log(data, "manage");

        if (status === 200) {
            yield put({ type: UPDATE_FACULTY_SUCCESS, data })
        }
        else {
            yield put({ type: UPDATE_FACULTY_ERROR, data })
        }
    } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
        yield put({ type: UPDATE_FACULTY_ERROR, e })
    }
}