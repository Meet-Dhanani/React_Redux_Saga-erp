import { call, put } from 'redux-saga/effects';
import { DeleteSubadmin, GetSubadmin, PostSubadmin, UpdateSubadmin } from '../../subadmin/api/api';
import { DELETE_SUBADMIN_ERROR, DELETE_SUBADMIN_SUCCESS, GET_SUBADMIN_LIST_ERROR, GET_SUBADMIN_LIST_SUCCESS, POST_SUBADMIN_ERROR, POST_SUBADMIN_SUCCESS, UPDATE_SUBADMIN_ERROR, UPDATE_SUBADMIN_SUCCESS } from '../../subadmin/action/action';
import Swal from 'sweetalert2';

export function* handleGetsubadmin(action) {
    try {
        const res = yield call(GetSubadmin, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            yield put({ type: GET_SUBADMIN_LIST_SUCCESS, data })
        }
        else {
            yield put({ type: GET_SUBADMIN_LIST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: GET_SUBADMIN_LIST_ERROR, e })
    }
}

export function* handlePostsubadmin(action) {
    try {
        const res = yield call(PostSubadmin, action)
        const data = res.data
        const status = res.status
        
        if (status === 200 || status===201) {
            Swal.fire({
                title: "Good Job",
                text: "Subadmin added Succesfully ",
                icon: "success"
            })
            yield put({ type: POST_SUBADMIN_SUCCESS, data })
        }
        else {
            yield put({ type: POST_SUBADMIN_ERROR, data })
        }
    } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
        yield put({ type: POST_SUBADMIN_ERROR, e })
    }
}

export function* handleDeletesubadmin(action) {
    try {
        const res = yield call(DeleteSubadmin, action)
        const data = res.data
        const status = res.status
        
        if (status === 200 || status===201) {
            Swal.fire({
                title: "Good Job",
                text: "Subadmin Deleted Succesfully ",
                icon: "success"
            })
            yield put({ type: DELETE_SUBADMIN_SUCCESS, data })
        }
        else {
            yield put({ type: DELETE_SUBADMIN_ERROR, data })
        }
    } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
        yield put({ type: DELETE_SUBADMIN_ERROR, e })
    }
}

export function* handleUpdatesubadmin(action) {
    try {
        const res = yield call(UpdateSubadmin, action)
        const data = res.data
        const status = res.status
        
        if (status === 200 || status===201) {
            yield put({ type: UPDATE_SUBADMIN_SUCCESS, data })
        }
        else {
            yield put({ type: UPDATE_SUBADMIN_ERROR, data })
        }
    } catch (e) {
        yield put({ type: UPDATE_SUBADMIN_ERROR, e })
    }
}