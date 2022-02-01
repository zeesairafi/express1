const express = require("express");
const router = express.Router();
const { fetchData, getData, deleteData, createData } = require("./controllers");





router.get("/", fetchData)

router.get("/", getData)

router.post("/", createData)

router.delete("/:dataId", deleteData)

router.put("/:dataId", updateData)


module.exports = router;