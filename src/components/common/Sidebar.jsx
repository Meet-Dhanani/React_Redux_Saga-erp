import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { GET_SUBADMIN_LIST_PROGRESS } from '../../redux-saga/subadmin/action/action'
import { GET_FACULTY_PROGRESS } from '../../redux-saga/faculty/action/action'
import { GET_STUDENT_PROGRESS } from '../../redux-saga/student/action/action'

const Sidebar = ({data}) => {

    const dispatch=useDispatch()

    
    useEffect(()=>{
        if(data[0].role==="admin"){
            dispatch({type:GET_SUBADMIN_LIST_PROGRESS})
            dispatch({type:GET_FACULTY_PROGRESS})
            dispatch({type:GET_STUDENT_PROGRESS})
        }
        else if(data[0].role==="subadmin"){
            dispatch({type:GET_FACULTY_PROGRESS})
            dispatch({type:GET_STUDENT_PROGRESS})
        }
    },[])

    return (
        <div>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse shadow-lg">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        {
                            data?.map((val, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <NavLink to={`${val.path}`} className="nav-link" aria-current="page" href="#">
                                            {val.name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>
  )
}

export default Sidebar