var interval,
    onChangeHandler;

var stocks = [
        {symbol: "AAPL", open: 38.87},
        {symbol: "GOO", open: 25.40},
        {symbol: "IBM", open: 97.05},
        {symbol: "TWTR", open: 69.45},
        {symbol: "AMZN", open: 83.24},
        {symbol: "FB", open: 55.76},
        {symbol: "BUDU", open: 76.12},
        {symbol: "TSLA", open: 61.75},
        {symbol: "CAKE", open: 15.84},
        {symbol: "TNT", open: 154.50}
    ];

stocks.forEach(function(stock) {
    stock.last = stock.open;
    stock.high = stock.open;
    stock.low = stock.open;
});

function simulateChange() {

    var index = Math.floor(Math.random() * stocks.length),
        stock = stocks[index],

        maxChange = stock.open * 0.005,
        change = maxChange - Math.random() * maxChange * 2,
        last;

    change = Math.round(change * 100) / 100;
    change = change === 0 ? 0.01 : change;

    last = stock.last + change;

    if (last > stock.open * 1.15 || last < stock.open * 0.85)
    {
        change = -change;
        last = stock.last + change;
    }

    stock.change = change;
    stock.last = Math.round(last * 100) / 100;
    if (stock.last > stock.high) {
        stock.high = stock.last;
    }
    if (stock.last < stock.low) {
        stock.low = stock.last;
    }
    onChangeHandler(stock.symbol, 'stock', stock);
}

function start(onChange) {
    onChangeHandler = onChange;
    interval = setInterval(simulateChange, 500);
}

function stop() {
    clearInterval(interval);
}

exports.start = start;
exports.stop = stop;