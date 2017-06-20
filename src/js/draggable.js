import Rx from 'rxjs';


Array.prototype.concatAll = function() {
    let results = [];

    this.map(
        subArray => subArray.map(
            item => results.push(item)
        )
    );

    return results;
};

let parent = document.getElementById('parent');
let widget = document.getElementById('widget');

let Observable = Rx.Observable;

let mouseDowns = Observable.fromEvent(widget, 'mousedown');
let parentMouseMoves = Observable.fromEvent(parent, 'mousemove');
let parentMouseUps = Observable.fromEvent(parent, 'mouseup');

let drags = mouseDowns
    .map(e => parentMouseMoves
        .takeUntil(parentMouseUps))
    .concatAll();

drags.forEach(e => {
    widget.style.left = e.clientX + 'px';
    widget.style.top = e.clientY + 'px';

    // if (e.clientX > 500 || e.clientY > 500) {
    //     widget.style.left = '10px';
    //     widget.style.top = '10px';
    // }
});