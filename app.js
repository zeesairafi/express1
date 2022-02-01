const express = require("express")
const { connect } = require("mongoose")
const app = express()
const dataRoutes = require("./apis/data/routes")
const connectDB = require("./db/database")

app.use(express.json())
app.use("/apis/data", dataRoutes)
connectDB();




app.listen(8080, () => console.log("this app is running"))