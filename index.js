const express = require('express');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const path = require('path');
server.listen(process.env.PORT || 3000);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
io.on('connection', function (socket) {
 //socket.emit('message',"Hello from webSocket");
 socket.on('append',function(msg){
     console.log(msg);
     //socket.emit('append',msg);
     io.emit('append',msg);
 });
});