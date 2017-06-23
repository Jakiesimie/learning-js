import expect from 'expect';
import deepFreeze from 'deep-freeze';


const addCounter = (list) => {
    return [...list, 0];
};

const removeCounter = (list, index) => {
    return list.filter((e, i) => i !== index)
};

const incrementCounter = (list, index) => {
    return list.map((e, i) => i === index ? e+1 : e)
};

const decrementCounter = (list, index) => {
    return list.map((e, i) => i === index ? e-1 : e)
};


const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter)
};

const testRemoveCounter = () => {
    const listBefore = [5, 3, 4, 8];
    const listAfter = [5, 3, 8];

    deepFreeze(listBefore);

    expect(
        removeCounter(listBefore, 2)
    ).toEqual(listAfter);
};

const testIncrementCounter = () => {
    const listBefore = [5, 3, 4, 8];
    const listAfter = [5, 4, 4, 8];

    deepFreeze(listBefore);

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
};

const testDecrementCounter = () => {
    const listBefore = [5, 3, 4, 8];
    const listAfter = [5, 2, 4, 8];

    deepFreeze(listBefore);

    expect(
        decrementCounter(listBefore, 1)
    ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
testDecrementCounter();

console.log('addCounter: Tests passed!');
