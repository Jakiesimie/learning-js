import Rx from 'rxjs-es/Rx';


let Observable = Rx.Observable;
let button = document.getElementById('button');
let handler = e => alert('clicked');

button.addEventListener('click', handler);

// using the map method with Observable

// Simple drag and drop with Observables

// Advanced Flattening