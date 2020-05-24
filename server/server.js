//https://blooming-sierra-62290.herokuapp.com/
const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');

// const currentPath = path.join(__dirname, '..', 'public');
const currentPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8965;

var app = express();
var server = http.createServer(app);
var io = socket(server);

app.use(express.static(currentPath));

io.on('connection', (socket)=>{
    console.log('New User Connected !!!');
    socket.on('disconnect', ()=>{
        console.log('User Disconnected from Server');
    });
});


server.listen(port, ()=>{
    console.log(`Application Running on port : ${port}`);
});
