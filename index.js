const Discord = requrie('discord.js')
const client = new Discord.Client()
const http = require('http')
const express = require('express')
const app = express()
const prefix = "c/"
// k
var server = http.createServer(app)
app.get("/", (request, respone) => {
    console.log('Test test test => Ping')
    respone.sendStatus(200);

})
app.listen(process.env.PORT)
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`)
})

client.once(ready, () => {
    console.log("Activ")
})

client.login("")
/*Acum o sa ii dau upload la github
*///o sa vezi de ce