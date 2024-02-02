import React from "react";
import { useSelector } from "react-redux";

const Student = () => {
    const student=useSelector((state)=>state.studentReducer.student)

    return (
        <div className="container rounded mt-5 bg-white p-md-5 shadow">
        <div className="h2 font-weight-bold text-center mb-4">
            Student List
        </div>
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">GR_ID</th>
                        <th scope="col">Student_Name</th>
                        <th scope="col">Course</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((val, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-capitalize">{index + 1}</td>
                                <td className="text-capitalize">{val.gr_id}</td>
                                <td className="text-capitalize">{val.student_name}</td>
                                <td className="text-capitalize">{val.course}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Student;
