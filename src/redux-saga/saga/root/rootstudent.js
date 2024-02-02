import { takeLatest } from "redux-saga/effects";
import { DELETE_STUDENT_PROGRESS, GET_STUDENT_PROGRESS, POST_STUDENT_PROGRESS, UPDATE_STUDENT_PROGRESS } from "../../student/action/action";
import { handledeletestudent, handlegetstudent, handlepoststudent, handleupdatestudent } from "../managestudent/managestudent";

export function* getstudentsaga(){
    yield takeLatest(GET_STUDENT_PROGRESS,handlegetstudent)
}

// post student 

export function* poststudentsaga(){
    yield takeLatest(POST_STUDENT_PROGRESS,handlepoststudent)
}

// delete data

export function* deletestudentsaga(){
    yield takeLatest(DELETE_STUDENT_PROGRESS,handledeletestudent)
}

// update student 

export function* updatestudentsaga(){
    yield takeLatest(UPDATE_STUDENT_PROGRESS,handleupdatestudent)
}