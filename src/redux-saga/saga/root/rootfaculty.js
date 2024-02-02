import { takeLatest } from "redux-saga/effects";
import { DELETE_FACULTY_PROGRESS, GET_FACULTY_PROGRESS, POST_FACULTY_PROGRESS, UPDATE_FACULTY_PROGRESS } from "../../faculty/action/action";
import { handleDeletefaculty, handleGetfaculty, handlePostfaculty, handleUpdatefaculty } from "../managefaculty/managefaculty";

// get faculty
export function* getfacultysaga() {
    yield takeLatest(GET_FACULTY_PROGRESS, handleGetfaculty)
}

// post faculty 

export function* postfacultysaga() {
    yield takeLatest(POST_FACULTY_PROGRESS, handlePostfaculty)
}

// delete faculty 

export function* deletefacultysaga() {
    yield takeLatest(DELETE_FACULTY_PROGRESS, handleDeletefaculty)
}

// update faculyt

export function* updatefacultysaga() {
    yield takeLatest(UPDATE_FACULTY_PROGRESS, handleUpdatefaculty)
}