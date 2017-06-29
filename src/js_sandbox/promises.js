let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('hello world');
        } else {
            reject('no bueno');
        }
    }, 2000)
});

p.then(data => console.log('Success: ' + data));
p.catch(error => console.log('Error: ' + error));

// p.then(
//     data => console.log('Success: ' + data),
//     error => console.log('Error: ' + error)
// );
