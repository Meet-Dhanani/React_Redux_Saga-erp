import { takeLatest } from '@redux-saga/core/effects';
import { DELETE_SUBADMIN_PROGRESS, GET_SUBADMIN_LIST_PROGRESS, POST_SUBADMIN_PROGRESS, UPDATE_SUBADMIN_PROGRESS } from "../../subadmin/action/action";
import { handleDeletesubadmin, handleGetsubadmin, handlePostsubadmin, handleUpdatesubadmin } from "../manegesubadmin/managesubadmin";

// get subadmin
export function* getSubadminsaga() {
    yield takeLatest(GET_SUBADMIN_LIST_PROGRESS, handleGetsubadmin)
}

// post subadmin
export function* postSubadminsaga() {
    yield takeLatest(POST_SUBADMIN_PROGRESS, handlePostsubadmin)
}

// delete data

export function* deleteSubadminsaga() {
    yield takeLatest(DELETE_SUBADMIN_PROGRESS, handleDeletesubadmin)
}

// update data


export function* updateSubadminsaga() {
    yield takeLatest(UPDATE_SUBADMIN_PROGRESS, handleUpdatesubadmin)
}