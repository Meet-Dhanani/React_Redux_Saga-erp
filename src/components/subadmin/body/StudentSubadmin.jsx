import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DELETE_STUDENT_PROGRESS,
    POST_STUDENT_PROGRESS,
    UPDATE_STUDENT_PROGRESS,
} from "../../../redux-saga/student/action/action";
import axios from "axios";

const StudentSubadmin = () => {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.studentReducer.student);
    const [data, setdata] = useState({
        student_name: "",
        course: "",
        enrollment_number: JSON.stringify(
            Math.floor(Math.random() * 1000000000000)
        ),
        gr_id: JSON.stringify(Math.floor(Math.random() * 10000)),
        password: "",
    });
    const [update, setupdate] = useState({});

    const changedata = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };

    const submitdata = () => {
        dispatch({ type: POST_STUDENT_PROGRESS, payload: data });
    };

    const deletedata = (id) => {
        dispatch({ type: DELETE_STUDENT_PROGRESS, payload: id });
    };

    const updatedata = (val) => {
        setupdate(val);
    };
    const changeupdate = (e) => {
        setupdate({ ...update, [e.target.name]: e.target.value });
    };
    const senddata = () => {
        const newdata = {
            student_name: update.student_name,
        };
        let up= axios.put(`http://13.235.248.55:3000/v1/student/update/${update._id}`,newdata)
             .then((res) => {
                 console.log(res);
             })
             .catch((e) => console.log(e));
        console.log(update._id);
        dispatch({type:UPDATE_STUDENT_PROGRESS,payload:up})
    };

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    className="btn add-btn mb-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Add
                </button>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel">
                                Add Student
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="mb-4">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label fw-semibold">
                                    Enter Your Name{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={changedata}
                                    name="student_name"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label fw-semibold">
                                    Enter Course
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={changedata}
                                    name="course"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Course Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label fw-semibold">
                                    Password
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={changedata}
                                    name="password"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="********"
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                onClick={submitdata}
                                data-bs-dismiss="modal"
                                className="btn btn-success">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* table */}

            <div className="container rounded mt-0 bg-white p-md-5 shadow">
                <div className="h2 font-weight-bold text-center mb-4">
                    Student List
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">Id</th>
                                <th scope="col">GR_ID</th>
                                <th scope="col">Enrollment Number</th>
                                <th scope="col">Student_Name</th>
                                <th scope="col">Course</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((val, index) => {
                                return (
                                    <tr key={index} className="text-center">
                                        <td className="text-capitalize">
                                            {index + 1}
                                        </td>
                                        <td className="text-capitalize">
                                            {val.gr_id}
                                        </td>
                                        <td className="text-capitalize">
                                            {val.enrollment_number}
                                        </td>
                                        <td className="text-capitalize">
                                            {val.student_name}
                                        </td>
                                        <td className="text-capitalize">
                                            {val.course}
                                        </td>
                                        <td className="text-capitalize">
                                            <button
                                                onClick={() =>
                                                    deletedata(val._id)
                                                }
                                                className="btn delete-btn">
                                                Delete
                                            </button>
                                            {/* <button
                                                onClick={() => updatedata(val)}
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                                className="btn update-btn ms-2">
                                                Update
                                            </button> */}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/*update student*/}

            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel">
                                Modal title
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="mb-4">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label fw-semibold">
                                    Enter Your Name{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={changeupdate}
                                    value={update.student_name}
                                    name="student_name"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={senddata}>
                                Understood
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentSubadmin;
