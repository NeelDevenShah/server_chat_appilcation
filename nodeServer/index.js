//Node server which will handle socket.io connection
// const io = require('socket.io')(8000)

import { Server } from "socket.io";
const io = new Server(8000);
const users={};

io.on('connection', socket=>{
    socket.on('new-user-joined', name=>{
        console.log(name);
        users[socket.id]=name; 
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message=>{
        socket.broadcast.emit('receive', {message: message, name: user[socket.id]})
    });
})