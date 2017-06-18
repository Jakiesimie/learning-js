function getStockSymbols(stocks) {
    // let symbols = [];
    // stocks.forEach(
    //     stock => result.push(stock.symbol)
    // );
    // return symbols;
    return stocks.map(stock => stock.symbol);
}

function getStocksOver(stocks, minPrice) {
    return stocks.filter(stock => stock.price >= minPrice);
}

function filteredStocksSymbols(stocks, minPrice) {
    return stocks
        .filter(stock => stock.price >= minPrice)
        .map(stock => stock.symbol)
}

let stocks = [
    {symbol: 'XFX', price: 240.22, volume: 23432},
    {symbol: 'TNZ', price: 223.19, volume: 234},
    {symbol: 'JXJ', price: 120.22, volume: 5323},
];

console.log(getStockSymbols(stocks));
console.log(getStocksOver(stocks, 200));
// console.log(JSON.stringify(getStocksOver(stocks, 230)));

console.log('\n' + filteredStocksSymbols(stocks, 200));


// reduce
let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((x, y) => x * y));


let exchanges = [
    [
        {symbol: 'XFX', price: 240.22, volume: 23432},
        {symbol: 'TNZ', price: 223.19, volume: 234},
    ],
    [
        {symbol: 'JXJ', price: 120.22, volume: 5323},
        {symbol: 'NUN', price: 88.47, volume: 98275},
    ]
];

// nested forEach
exchanges.forEach(
    exchange => exchange.forEach(
        stock => console.log(stock)
    )
);

console.log('\n');

// same result, but using .map
exchanges.map(
    exchange => exchange.map(
        stock => console.log(stock)
    )
);

console.log('\n');

Array.prototype.concatAll = function() {
    let results = [];

    this.map(
        subArray => subArray.map(
            item => results.push(item)
        )
    );

    return results;
};

exchanges.concatAll()
    .map(item => console.log(item));
