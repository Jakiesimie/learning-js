const myCombineReducers = (reducers) => {
    reducers.map(r => {
        r: r(
            state.todos,
            action
        )
    })
};


// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action
//         )
//     };
// };


export default { myCombineReducers };