const express = require("express")
const app = express()
const dataRoutes = require("./apis/data/routes")

app.use(express.json())
app.use("/apis/data", dataRoutes)



app.listen(8080, () => console.log("this app is running"))