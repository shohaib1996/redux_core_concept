// import { createAction, createReducer } from "@reduxjs/toolkit"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"
import axios from "../utils/http"



// export const fetchToDo = () => {
//     return async function (dispatch, getState) {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const task = await res.json()
//         dispatch(addTask({task: task.title}))

//     }
// }

// createSlice method does not need any createAction and create reducer
// export const fetchTasks = createAsyncThunk("fetchTask", async (a, {rejectWithValue}) => {
//     try {
//         const res = await axios.get("/tasks")
//     return { tasks: res.data }
//     } catch (error) {
//         return rejectWithValue({error: error.message})
//     }
// })
let id = 0

const initialState = {
    tasks: [],
    loading: false,
    error: null
}

const taskSlice = createSlice({
    name: "tasks",
    // initialState: [],
    initialState: initialState,
    reducers: {
        apiRequested: (state, action) => {
            state.loading = true
        },
        apiRequestFailed: (state, action) => {
            state.loading = false
        },
        getTask: (state, action) => {
            // return action.payload.tasks
            // state.tasks = action.payload.tasks
            state.tasks = action.payload
            state.loading = false
        },
        addTask: (state, action) => {
            //Without create async thunk
            // state.push({
            //     id: ++id,
            //     task: action.payload.task,
            //     completed: false
            // });
            // state.tasks.push({
            //     id: ++id,
            //     task: action.payload.task,
            //     completed: false
            // });
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks.splice(index, 1); // Correct usage
            }
        },

        completedTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            // state.tasks[index].completed = true;
            state.tasks[index].completed = action.payload.completed
        }

    },

    // extraReducers: (builder) => {
    //     builder.addCase(fetchTasks.pending, (state, action) => {
    //         state.loading = true
    //     });
    //     builder.addCase(fetchTasks.fulfilled, (state, action) => {
    //         state.tasks = action.payload.tasks;
    //         state.loading = false
    //     });
    //     builder.addCase(fetchTasks.rejected, (state, action) => {
    //         state.error = action.payload.error;
    //         state.loading = false
    //     });
    //     // You can add more cases here if you have other async actions
    // }
})

export const { apiRequested, apiRequestFailed, getTask, addTask, removeTask, completedTask } = taskSlice.actions

export default taskSlice.reducer

// const url = "/tasks"

export const loadTasks = () => {
    return apiCallBegan({
        url: "/tasks",
        onStart: "tasks/apiRequested",
        // onSuccess: "tasks/getTask",
        // onError: "SHOW_ERROR"
        // onError: "tasks/apiRequestFailed"
        onSuccess: getTask.type,
        onError: apiRequestFailed.type

    })
}

export const addNewTask = (task) =>
    apiCallBegan({
        url: "/tasks",
        method: "POST",
        data: task,
        onSuccess: addTask.type
    })
export const updateCompleted = (task) =>
    apiCallBegan({
        url: `/tasks/${task.id}`,
        method: "PATCH",
        data: task,
        onSuccess: completedTask.type
    })
export const deleteTask = (task) =>
    apiCallBegan({
        url: `/tasks/${task.id}`,
        method: "DELETE",
        data: task,
        onSuccess: removeTask.type
    })


// Action Type section

// const ADD_TASK = "ADD_TASK"
// const REMOVE_TASK = "REMOVE_TASK"
// const COMPLETED_TASK = "COMPLETED_TASK"

// Action section

// redux toolkit

// export const addTask = createAction("ADD_TASK")
// export const removeTask = createAction("REMOVE_TASK")
// export const completedTask = createAction("COMPLETED_TASK")
// console.log(test({task: "Task 1"}));

// Old redux core

// export const addTask = task => {
//     return { type: ADD_TASK, payload: { task: task } }
// }

// export const removeTask = id => {
//     return { type: REMOVE_TASK, payload: { id: id } }
// }

// export const completedTask = (id) => {
//     return { type: COMPLETED_TASK, payload: { id: id } }
// }


// export const fetchToDo = () => {
//     return async function (dispatch, getState) {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const task = await res.json()
//         dispatch(addTask(task.title))

//     }
// }

// redux toolkit
// export const fetchToDo = () => {
//     return async function (dispatch, getState) {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const task = await res.json()
//         dispatch(addTask({ task: task.title }))

//     }
// }
//Reducer

// let id = 0

// export default createReducer([], (builder) => {
//     builder
//         .addCase(addTask, (state, action) => {
//             state.push({
//                 id: ++id,
//                 task: action.payload.task,
//                 completed: false
//             });
//         })
//         .addCase(removeTask, (state, action) => {
//             const index = state.findIndex(task => task.id === action.payload.id);
//             state.splice(index, 1);
//         })
//         .addCase(completedTask, (state, action) => {
//             const index = state.findIndex(task => task.id === action.payload.id);
//             state[index].completed = true;
//         });
// });

// Redux core

// export default function reducer(state = [], action) {
//     if (action.type === ADD_TASK) {
//         return [
//             ...state,
//             {
//                 id: ++id,
//                 task: action.payload.task,
//                 completed: false
//             }
//         ]
//     }
//     else if (action.type === REMOVE_TASK) {
//         return state.filter(task => task.id !== action.payload.id)
//     }
//     else if (action.type === COMPLETED_TASK) {
//         return state.map(task => task.id === action.payload.id ? { ...task, completed: true } : task)
//     }

//     return state
// }


//redux toolkit with old action
// export default function reducer(state = [], action) {
//     if (action.type === addTask.type) {
//         return [
//             ...state,
//             {
//                 id: ++id,
//                 task: action.payload.task,
//                 completed: false
//             }
//         ]
//     }
//     else if (action.type === removeTask.type) {
//         return state.filter(task => task.id !== action.payload.id)
//     }
//     else if (action.type === completedTask.type) {
//         return state.map(task => task.id === action.payload.id ? { ...task, completed: true } : task)
//     }

//     return state
// }