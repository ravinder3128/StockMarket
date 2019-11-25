const io = require('socket.io-client');
// Replace this URL with your own, if you want to run the backend locally!
const SocketEndpoint = 'http://192.168.43.68:3000';
var feed = (function () {

    var socket = io(SocketEndpoint, {
        transports: ['websocket'],
        pingTimeout: 30000,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax : 5000,
        reconnectionAttempts: "Infinity"
    });

    socket.on( 'reconnect', function () {
        socket.emit('join', ['AAPL', 'GOO', 'IBM', 'TWTR', 'AMZN', 'FB', 'BUDU', 'TSLA', 'CAKE', 'TNT']);
    });

    return {
        onChange: function(callback) {
            socket.on('stock', callback);
        },
        watch: function(symbols) {
            socket.emit('join', symbols);
        }
    };

}());
export default feed;