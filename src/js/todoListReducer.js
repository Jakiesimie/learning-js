import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';


const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'DEL_TODO':
            return state.filter(e => e.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        case 'PRINT_ALL_TODOS':
            return state.map(e => console.log(e));
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp);

let nextTodoId = 1;

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <input ref={node =>
                    this.input = node
                } />
                <button onClick={() => {
                    if (this.input.value) {
                        store.dispatch({
                            type: 'ADD_TODO',
                            text: this.input.value,
                            id: nextTodoId++
                        });
                        this.input.value = '';
                    }
                }}>
                    Add Todo
                </button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id} onClick={() => {
                            store.dispatch({
                                type: 'TOGGLE_TODO',
                                id: todo.id
                            })
                        }}
                        style={{
                          textDecoration: todo.completed ? 'line-through' : 'none'
                        }}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
        <TodoApp todos={store.getState().todos} />,
        document.getElementById('root')
    )
};

store.subscribe(render);
render();


const currentState = (store, stateType) => {
    console.log(stateType + ' state:');
    console.log(store.getState());
    console.log('--------------');
};

currentState(store, 'Initial');

console.log('Dispatching ADD_TODO:');
store.dispatch({
    type:'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});
currentState(store, 'Current');

console.log('Dispatching TOGGLE_TODO:');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});
currentState(store, 'Current');


// Tests
const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: action.id,
            text: action.text,
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter, 'Insertion Error');
};

const testDelTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];
    const action = {
        type: 'DEL_TODO',
        id: 0
    };
    const stateAfter = [];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter, 'Deletion Error');
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn React',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateAfter = [
        stateBefore[0],
        {
            id: 1,
            text: 'Learn React',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};


testAddTodo();
testDelTodo();
testToggleTodo();

console.log('todoListReducer: Tests passed!');
