const express = require("express")
const app = express()
const dataRoutes = require("./apis/data/routes")
const connectDB = require("./db/database")
const { logger, notFoundPage, errorHandlers } = require("./midleware/logger")

app.use(express.json())
app.use(logger)
//Router
app.use("/apis/data", dataRoutes)

//midleware


app.use(notFoundPage)
app.use(errorHandlers)

connectDB();
app.listen(8080, () => console.log("this app is running"))