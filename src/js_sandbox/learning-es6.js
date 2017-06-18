let createGreeting = (msg, name) => msg + ' ' + name;

console.log(createGreeting('Hello', 'Neevor'));


function helloPerson(greeting = 'Hello', name = 'Wojtek') {
    console.log(greeting + ' ' + name);
}

helloPerson();
helloPerson('Hi', 'Paulina');