const log = store => next => action => {
    // console.log(action);
    // console.log(next);
    // console.log(store);

    next(action)
}

export default log