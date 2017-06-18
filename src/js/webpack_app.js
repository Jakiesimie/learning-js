import $ from 'jquery';
import Rx from 'rxjs/Rx';

import '../css/style.css';
import people from './people';


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
            // subscription.unsubscribe();
        },
        function onError(error) {
            console.log(error);
        },
        function onCompleted() {
            console.log('done!');
        }
);

