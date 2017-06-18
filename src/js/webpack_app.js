import $ from 'jquery';
import Rx from 'rxjs/Rx';

import '../css/style.css';
import people from './people';

let button = document.getElementById('button');

let Observable = Rx.Observable;
let clicks = Observable.fromEvent(button, 'click');

clicks.forEach(_ => alert('Hello!'));

people.forEach(e => console.log(e.name));

$.each(people, (key, value) => {
    $('body').append('<h1>'+people[key].name+'</h1>');
});
