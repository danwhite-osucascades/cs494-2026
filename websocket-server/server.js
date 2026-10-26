import  { WebSocketServer } from 'ws'

const server = new WebSocketServer({port: 8081})

const clients = []

const bannedUsers = ["Danny"]

server.on("connection", (socket)=>{
    console.log("Client Connected")

    clients.push(socket)

    socket.on("message", (message)=>{
        const messageObj = JSON.parse(message.toString())
        
        for (let i = 0; i < bannedUsers.length; i++){
            if (messageObj.user == bannedUsers[i]){
                socket.send("You're banned dude! Quit being weird!")
                console.log("banned user")
                return
            }
        }

        // socket.send(message.toString())
        for (let i = 0; i < clients.length; i++){
            clients[i].send(`${messageObj.user}: ${messageObj.message}`)
        }
    })
})

console.log("Websocket server is running")