import store from "./store/configureStore";
// import { apiCallBegan } from "./store/api";
import { loadTasks, addNewTask, updateCompleted, deleteTask} from "./store/task";
// import { fetchTasks, getTask, addTask, removeTask, completedTask, fetchToDo } from "./store/task";
// // import { addEmployee } from "./store/employee";

// import axios from "axios";



// const unsubscribe = store.subscribe(()=> {
//     console.log("Update", store.getState());
// })
// store.dispatch(addTask({task: "Task 1"}))
// store.dispatch(addTask({task: "Task 2"}))
// console.log(store.getState());
// // unsubscribe()
// store.dispatch(completedTask({id: 2}))
// store.dispatch(removeTask({id: 1}))
// store.dispatch(fetchToDo())
// console.log(store.getState());

// store.dispatch(addEmployee({name: "Peter"}))
// console.log(store.getState());

// store.dispatch({type: "SHOW_ERROR", payload: {error: "User not found"}})

// const gettingTask = async () => {
//     try {
//         const res = await axios.get("http://localhost:5000/api/tasks")
//         const tasks = res.data
//         // console.log(tasks);
//         store.dispatch(getTask({ tasks: tasks }))
//     } catch (error) {
//         store.dispatch({type: "SHOW_ERROR", payload: {error: error.message}})
//     }
// }

// gettingTask()

// store.dispatch(fetchTasks())




store.dispatch(
    loadTasks()
)
store.dispatch(
    addNewTask({task: "complete this exercise"})
)

store.dispatch(updateCompleted({id: 1, completed: true }))
store.dispatch(deleteTask({id: 10}))


// store.dispatch({
//     type: "apiRequest",
//     payload: {
//         url: "/tasks",
//         onStart: "tasks/apiRequested",
//         onSuccess: "tasks/getTask",
//         // onError: "SHOW_ERROR"
//         onError: "tasks/apiRequestFailed"
//     }
// })