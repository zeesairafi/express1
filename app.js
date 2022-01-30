const express = require("express");


const data = require("./data")

const app = express();



app.get("/", (req, res) => {
    console.log("hello");
    res.json({song:"Hello"})
}) 

app.get("/data", (req, res) => {
    res.json(data)
})




app.listen(8080, () => console.log("this app is running"))