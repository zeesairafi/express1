const express = require("express");
const router = express.Router();
const { fetchData, postData, deleteData } = require("./controllers");





router.get("/", fetchData)



router.post("/", postData)

app.delete("/:dataId", deleteData)

module.exports = router;