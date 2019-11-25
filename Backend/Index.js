const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var feed = require('./feed');

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log('User connected. Socket id %s', socket.id);

    socket.on('join', function (rooms) {
        console.log('Socket %s subscribed to %s', socket.id, rooms);
        if (Array.isArray(rooms)) {
            rooms.forEach(function(room) {
                socket.join(room);
            });
        } else {
            socket.join(rooms);
        }
    });

    socket.on('leave', function (rooms) {
        console.log('Socket %s unsubscribed from %s', socket.id, rooms);
        if (Array.isArray(rooms)) {
            rooms.forEach(function(room) {
                socket.leave(room);
            });
        } else {
            socket.leave(rooms);
        }
    });

    socket.on('disconnect', function (reason) {
        console.log('User disconnected. %s. Socket id %s', socket.id, reason);
    });

    socket.on('error', (error) => {
        console.log('Error', error);
    });
});

feed.start(function(room, type, message) {
    io.to(room).emit(type, message);
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
