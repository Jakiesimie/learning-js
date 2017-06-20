let createGreeting = (msg, name) => msg + ' ' + name;

console.log(createGreeting('Hello', 'Neevor'));


function helloPerson(greeting = 'Hello', name = 'Wojtek') {
    console.log(greeting + ' ' + name);
}

helloPerson();
helloPerson('Hi', 'Paulina');

// spread
let first = [1, 2, 3];
let second = [4, 5, 6];

console.log(first);
console.log(...first);

first.push(second);
console.log(first);

first.push(...second);
console.log(first);

let zip = (a1, a2) => (a1.map(
    (x, i) => [x, a2[i]])
);

function tag(strings, ...values) {
    if (values[0] < 20) {
        values[1] = 'awake';
    } else {
        values[1] = 'sleepy';
    }
    console.log(strings, values);

    return zip(strings, values);
}

let message = tag`Is's ${new Date().getHours()} I'm ${''}`;

console.log(message);

let items = [4,6,8,9,11];
let square = x => x * x;
let squareAll = items => items.map(square);

console.log(squareAll(items));
console.log(items);
