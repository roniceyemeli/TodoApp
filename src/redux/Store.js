import {createStore} from "redux"
// import logger from "redux-logger"
import rootReducer from "./Root-reducer"

// const middleware=[];

// if(process.env.NODE_ENV==="development"){
//     middleware.push(logger);
// }
const devtool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer,devtool);

export default store;