import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import { adminsidebar, facultysidebar, subadminsidebar } from './components/common/data/sidebardata';
import Subadmin from './components/admin/body/Subadmin';
import Faculty from './components/admin/body/Faculty';
import Student from './components/admin/body/Student';
import FacultySubadmin from './components/subadmin/body/FacultySubadmin';
import StudentSubadmin from './components/subadmin/body/StudentSubadmin';
import StudentFaculty from './components/faculty/body/StudentFaculty';
import Login from './components/Login';

function App() {

  let role = "admin"

  if (role === "admin") {
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-2">
            <Sidebar data={adminsidebar} />
          </div>
          <div className="col-10">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/subadmin' element={<Subadmin />} />
              <Route path='/faculty' element={<Faculty />} />
              <Route path='/student' element={<Student />} />
            </Routes>
          </div>
        </div>
      </>
    )
  } else if (role === "subadmin") {
    return (
      <>
        <Header />
        <div className='row'>
          <div className="col-2">
            <Sidebar data={subadminsidebar} />
          </div>
          <div className="col-10">
            <Routes>
              {/* <Route path='/' element={<Login />} /> */}
              <Route path='/subadmin/faculty' element={<FacultySubadmin />} />
              <Route path='/subadmin/student' element={<StudentSubadmin />} />
            </Routes>
          </div>
        </div>
      </>
    )
  } else if (role === "faculty") {
    return (
      <>
        <Header />
        <div className='row'>
          <div className="col-2">
            <Sidebar data={facultysidebar} />
          </div>
          <div className="col-10">
            <Routes>
              {/* <Route path='/' element={<Login />} /> */}
              <Route path='/student' element={<StudentFaculty />} />
            </Routes>
          </div>
        </div>
      </>
    )
  }
  else{
    return(
      <Login/>
    )
  }
}

export default App;
