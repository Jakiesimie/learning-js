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