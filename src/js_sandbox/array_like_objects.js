const products = Array.from(document.querySelectorAll('.products'));

products.map(e => console.log(e.innerHTML));
// console.log(Array.from(products));

products
    .filter(e => parseFloat(e.innerHTML) < 10)
    .map(e => e.style.color = 'red');