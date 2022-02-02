const express = require("express");
const { fetchData, createData, deleteData, updateData} = require("./controllers");



//midleware
router.param("dataId", async(req, res, next, dataId) =>{
    const foundData = await fetchData(dataId, next)
    if(datas){
        req.datas = datas
        next()
    } else {
        next({ status: 404, message: "Data Not Found"})
    }
})

router.get("/", fetchData)

// router.get("/", getData)

router.post("/", createData)

router.delete("/:dataId", deleteData)

router.put("/:dataId", updateData)


module.exports = router;