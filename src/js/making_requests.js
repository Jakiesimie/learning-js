
class Obj {
    constructor() {
        this.state = {
            data: []
        };
    }
}

obj = new Obj();

let url = 'http://localhost:8000/api/todo/task/';
let headers = new Headers({
    'Authorization': 'Basic ' + btoa('user:password')
});
let request = new Request(url, {
    method: 'GET',
    mode: 'cors',
    headers: headers
});

let responseData = fetch(request)
    .then(response => response.json())
    .then(data => {
        updateState(data);
    })
    .catch(error => console.log('foobar!'));

function updateState(data) {
    for (item of data) {
        console.log(item);
    }
    console.log(Promise.all(data))
}

console.log(responseData);

// for (let item of obj.state.data.data) {
//     console.log(item);
// }
