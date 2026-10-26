import  { WebSocketServer } from 'ws'

const server = new WebSocketServer({port: 8081})

server.on("connection", (socket)=>{
    console.log("Client Connected")

    socket.on("message", (message)=>{
        console.log(`Received: ${message}`)
        socket.send(`${message}`)
    })
})

console.log("Websocket server is running")