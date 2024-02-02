import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_SUBADMIN_PROGRESS, POST_SUBADMIN_PROGRESS, UPDATE_SUBADMIN_PROGRESS } from '../../../redux-saga/subadmin/action/action'

const Subadmin = () => {

    const [formdata, setformdata] = useState({})
    const[update,setupdate]=useState({})
    const dispatch = useDispatch()

    const subadmin = useSelector((state) => state.subadminReducer.subadmin)

    const changedata = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const submitdata = () => {
        dispatch({ type: POST_SUBADMIN_PROGRESS, payload: formdata })
    }


    const deletedata = (id) => {
        dispatch({ type: DELETE_SUBADMIN_PROGRESS, payload: id })
    }

    const updatedata=(val)=>{
        setupdate(val)
    }
    const changeupdatedata=(e)=>{
        setupdate({...update,[e.target.name]:e.target.value})
    }
    const senddata=()=>{
        const newdata={
            // _id:update._id,
            subadmin_name:update.subadmin_name
        }
        dispatch({type:UPDATE_SUBADMIN_PROGRESS,payload:{update,newdata}})
    }

    if (subadmin.isLoading) {
        return <>
            <div className="container">
            loding
            </div>
        </>
    } else {
        return (
            <div className='container py-4'>

                <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add
                    </button>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add User</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Enter Your Name <span className='text-danger'>*</span></label>
                                    <input type="text" onChange={changedata} name='subadmin_name' className="form-control" id="exampleFormControlInput1" placeholder="Your Name" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label  fw-semibold">UserName <span className='text-danger'>*</span></label>
                                    <input type="text" onChange={changedata} name='username' className="form-control" id="exampleFormControlInput2" placeholder="Your UserName" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label  fw-semibold">Password <span className='text-danger'>*</span></label>
                                    <input type="password" onChange={changedata} name='password' className="form-control" id="exampleFormControlInput3" placeholder="*******" required />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={submitdata} data-bs-dismiss="modal" className="btn btn-outline-success">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container rounded mt-5 bg-white p-md-5 shadow">
                    <div className="h2 font-weight-bold text-center mb-4">
                        Subadmin List
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">Id</th>
                                    <th scope="col">Subadmin Name</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subadmin.map((val, index) => {
                                    return (
                                        <tr key={index} className='text-center'>
                                            <td className="text-capitalize">{index + 1}</td>
                                            <td className="text-capitalize">{val.subadmin_name}</td>
                                            <td className="text-capitalize">{val.username}</td>
                                            <td className="text-capitalize">
                                                <button onClick={() => deletedata(val._id)} className='btn delete-btn'>Delete</button>
                                                {/* <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>updatedata(val)} className='btn update-btn ms-2'>Update</button> */}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Enter Your Name <span className='text-danger'>*</span></label>
                                    <input type="text" onChange={changeupdatedata} value={update.subadmin_name} name='subadmin_name' className="form-control" id="exampleFormControlInput4" placeholder="Your Name" required />
                                </div>

                                {/* <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label  fw-semibold">UserName <span className='text-danger'>*</span></label>
                                    <input type="text" onChange={changeupdatedata} value={update.username} name='username' className="form-control" id="exampleFormControlInput5" placeholder="Your UserName" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label  fw-semibold">Password <span className='text-danger'>*</span></label>
                                    <input type="password" onChange={changeupdatedata} value={update.password} name='password' className="form-control" id="exampleFormControlInput6" placeholder="*******" required />
                                </div> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" data-bs-dismiss="modal" onClick={senddata} className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Subadmin
