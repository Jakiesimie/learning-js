import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import expect from 'expect';

// import { createStore } from './redux_sandbox_2';


// Reducer
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

const render = () => {
    document.getElementById('counter').innerHTML = store.getState();
};
render();

store.subscribe(render);


const increment = document.getElementById('inc');
increment.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
});

const decrement = document.getElementById('dec');
decrement.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' })
});


// Tests
expect(
    counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
    counter(1, { type: 'INCREMENT' })
).toEqual(2);

expect(
    counter(2, { type: 'DECREMENT' })
).toEqual(1);

expect(
    counter(1, { type: 'DECREMENT' })
).toEqual(0);

expect(
    counter(undefined, {})
).toEqual(0);

console.log('Tests passed!');
