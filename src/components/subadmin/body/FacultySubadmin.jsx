import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DELETE_FACULTY_PROGRESS,
    POST_FACULTY_PROGRESS,
    UPDATE_FACULTY_PROGRESS,
} from "../../../redux-saga/faculty/action/action";

const FacultySubadmin = () => {
    const faculty = useSelector((state) => state.facultyReducer.faculty);
    const dispatch = useDispatch();

    const [formdata, setformdata] = useState({});

    const [updateformdata, setupdateformdata] = useState({});

    const changedata = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const submitdata = () => {
        dispatch({ type: POST_FACULTY_PROGRESS, payload: formdata });
        setformdata({
                faculty_name:"",
                department:"",
                username:"",
                password:"",
                gender:""
        })
    };

    const deletedata = (id) => {
        dispatch({ type: DELETE_FACULTY_PROGRESS, payload: id });
    };

    const updatedata = (val) => {
        setupdateformdata(val);
    };

    const changeupdatedata = (e) => {
        setupdateformdata({
            ...updateformdata,
            [e.target.name]: e.target.value,
        });
    };

    const updateeddata = () => {
        dispatch({ type: UPDATE_FACULTY_PROGRESS, payload: updateformdata });
        // console.log(updateformdata);
    };

    return (
        <div>
            <div className="container py-4">
                <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn add-btn"
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
                                    Add User
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
                                        value={formdata.faculty_name}
                                        name="faculty_name"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label  fw-semibold">
                                        UserName{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        onChange={changedata}
                                        value={formdata.username}
                                        name="username"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Your UserName"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label  fw-semibold">
                                        Department{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        onChange={changedata}
                                        value={formdata.department}
                                        name="department"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Department"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label  fw-semibold">
                                        Password{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        onChange={changedata}
                                        value={formdata.password}
                                        name="password"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="*******"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label  fw-semibold">
                                        Gender{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            onChange={changedata}
                                            type="radio"
                                            name="gender"
                                            value="male"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            onChange={changedata}
                                            type="radio"
                                            name="gender"
                                            value="female"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
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
            </div>

            <div className="container rounded mt-0 bg-white p-md-5 shadow">
                <div className="h2 font-weight-bold text-center mb-4">
                    Faculty List
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">Id</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Department</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculty.map((val, index) => {
                                return (
                                    <tr key={index} className="text-center">
                                        <td className="text-capitalize">
                                            {index + 1}
                                        </td>
                                        <td className="text-capitalize">
                                            {val.username}
                                        </td>
                                        <td className="text-capitalize">
                                            {val.department}
                                        </td>
                                        <td className="text-capitalize">
                                            {val.gender}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    deletedata(val._id)
                                                }
                                                className="btn delete-btn btn-md">
                                                Delete
                                            </button>
                                            <button
                                                onClick={() => updatedata(val)}
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                                className="btn update-btn ms-2 btn-md">
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
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
                                Update User
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
                                    onChange={changeupdatedata}
                                    value={updateformdata.faculty_name}
                                    name="faculty_name"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label  fw-semibold">
                                    UserName{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={changeupdatedata}
                                    value={updateformdata.username}
                                    name="username"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Your UserName"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label  fw-semibold">
                                    Department{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={changeupdatedata}
                                    value={updateformdata.department}
                                    name="department"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Department"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label  fw-semibold">
                                    Password{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={changeupdatedata}
                                    value={updateformdata.password}
                                    name="password"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="*******"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label  fw-semibold">
                                    Gender{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        onChange={changeupdatedata}
                                        type="radio"
                                        name="gender"
                                        value="male"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        onChange={changeupdatedata}
                                        type="radio"
                                        name="gender"
                                        value="female"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
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
                                onClick={updateeddata}
                                className="btn btn-success"
                                data-bs-dismiss="modal">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultySubadmin;
