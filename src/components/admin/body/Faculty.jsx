import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Faculty = () => {
    const faculty = useSelector((state) => state.facultyReducer.faculty);

    return (
        <>
            <div className="container rounded mt-5 bg-white p-md-5 shadow">
                <div className="h2 font-weight-bold text-center mb-4">
                    Faculty List
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Department</th>
                                <th scope="col">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculty.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-capitalize">{index + 1}</td>
                                        <td className="text-capitalize">{val.username}</td>
                                        <td className="text-capitalize">{val.department}</td>
                                        <td className="text-capitalize">{val.gender}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Faculty;
