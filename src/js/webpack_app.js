import $ from 'jquery';
import Rx from 'rxjs/Rx';

import '../css/style.css';
import people from './people';
import './draggable.js';
import './rxjs_sandbox';


$.each(people, (key, value) => {
    $('body').append('<h1>'+people[key].name+'</h1>');
});

people.forEach(e => console.log(e.name));


// RxJS
let button = document.getElementById('button');

let Observable = Rx.Observable;
let clicks = Observable.fromEvent(button, 'click');

let subscription =
    clicks.subscribe(
        function onNext(e) {
            alert('Hello!');
            console.log('Hello!');
            subscription.unsubscribe();
        },
        function onError(error) {
            console.log(error);
        },
        function onCompleted() {
            console.log('done!');
        }
    );


// Create point stream from click stream
let clicks2 = Observable.fromEvent(window, 'click');

let points = clicks2.map(e => ({x: e.clientX, y: e.clientY}));

let subscription2 =
    points.subscribe(
        function onNext(point) {
            console.log('Point: ' + JSON.stringify(point));
        },
        function onError(error) {
            console.log(error);
        },
        function onCompleted() {
            console.log('done!');
        }
    );
