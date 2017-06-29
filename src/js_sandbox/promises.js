let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('hello world');
        } else {
            reject('no bueno');
        }
    }, 2000)
});


let output = document.getElementById('promise');
p
    .then(data => {
        console.log('Success: ' + data);
        return 'It was a success!:)';
    })
    .then(data => {
        console.log(data);
        return 'Success again!';
    })
    .then(data => {
        output.innerText = data;
    })
    .catch(error => console.log('Error: ' + error));

// p.then(
//     data => console.log('Success: ' + data),
//     error => console.log('Error: ' + error)
// );
