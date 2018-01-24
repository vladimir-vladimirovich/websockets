var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var utils = require('./tools/utils');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Displays message into server's console when someone is connected or disconnected
io.on('connection', function (socket) {
   console.log('System: user connected');
    socket.on('disconnect', function(){
        console.log('System: user disconnected');
    });
});

// Show client's message in servers's console
io.on('connection', function (socket) {
   socket.on('chat message', function (msg) {
       console.log('message: ' + msg);
   })
});

// When any client writes message - it is displayed for everyone
io.on('connection', function (socket) {
   socket.on('chat message', function (msg) {
       io.emit('chat message', msg);
   })
});

http.listen(3000, function () {
    console.log('listening on port :3000');
});

// ----------------------------> HOMEWORK from https://socket.io/get-started/chat/ below <----------------------------

// Broadcast a message to connected users when someone connects or disconnects
io.on('connection', function (socket) {
    socket.on('disconnect', function(){
        io.emit('chat message', 'Client: user disconnected');
    });
});

// Add support for nicknames

