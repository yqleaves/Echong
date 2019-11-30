import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import todo1 from "./reducers/todo1"

const reducer = combineReducers({
    todo1,
})
const store = createStore(reducer,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store