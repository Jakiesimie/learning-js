function* fib() {
    let a = 1;
    let b = 1;

    while(true) {
        yield b;
        [a, b] = [b, a+b];
    }
}

let fibonacci = fib();
for (let i = 0; i < 10; i++) {
    console.log(fibonacci.next().value);
}