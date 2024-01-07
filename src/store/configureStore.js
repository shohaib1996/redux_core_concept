// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'
// import { devToolsEnhancer } from '@redux-devtools/extension'

import { configureStore } from '@reduxjs/toolkit';
// import log from "../middleware/log"
// import logger from 'redux-logger'; 
import error from "./middleware/error"
import api from './middleware/api';

// import reducer from "./task"
import taskReducer from './task'
import employeeReducer from "./employee"
// Old code with Redux core


// const store = createStore(
//     reducer,
//     // applyMiddleware(thunk),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     devToolsEnhancer({trace: true})
// )


//Redux Toolkit
//reducer: reducer

// const store = configureStore({reducer})
const store = configureStore({
    reducer: {
        task: taskReducer,
        employee: employeeReducer
    },
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, error]
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error]
})


export default store