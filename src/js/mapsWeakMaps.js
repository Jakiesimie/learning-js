let obj = {
    one: 1,
    two: 2
};


let myMap = new Map();


// API
// set()
// get()
// size
// clear()
// has()

myMap.set('car', 'Fiat');
myMap.set('color', 'white');
myMap.set('noDoors', 4);

console.log('Car Type: ' + myMap.get('car'));
console.log('Car Color: ' + myMap.get('color'));
console.log('Map Size: ' + myMap.size);
console.log('car in myMap: ' + myMap.has('car'));
console.log(myMap);

myMap.delete('color');
console.log(myMap);


// Iterators
// keys()
// entries()
// values()

for (let key of myMap) {
    console.log(key);
}


let arr = ['a', 'b', 'c'];

for (let [index, item] of arr.entries()) {
    console.log(index, item);
}