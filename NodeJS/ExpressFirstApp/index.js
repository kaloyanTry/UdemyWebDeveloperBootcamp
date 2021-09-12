const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("We got a new request!");
//     res.send("Hello, We got your request! This is a respond!")
// })
app.get('/', (req, res) => {
    res.send('This is the home page!!!')
})

app.post('/cats', (req, res) => {
    res.send("Post request!")
})

app.get('/cats', (req, res) => {
    res.send("Meow")
})

app.get('/dogs', (req, res) => {
    res.send("Woof")
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

app.listen(8080, () => {
    console.log("Listening on port 8080!");
})

