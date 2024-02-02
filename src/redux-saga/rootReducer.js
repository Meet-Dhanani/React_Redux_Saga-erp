import { combineReducers } from "redux";
import subadminReducer from './subadmin/reducer/reduceer'
import facultyReducer from './faculty/reduceer/reduceer'
import studentReducer from './student/reducer/reducer'

const rootReducers = combineReducers({
    subadminReducer,
    facultyReducer,
    studentReducer
})

export default rootReducers