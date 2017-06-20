import Rx from 'rxjs';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stream = Rx.Observable.interval(400).take(5);


let source = stream.map(i => arr[i]);

source.subscribe(e => console.log(e));
