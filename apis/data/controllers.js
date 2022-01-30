


let data = require("../..data")





exports.fetchData =(req, res) => {
    res.json(data)
}



exports.postData=(req, res) => {
    
  
    const newData = {...req, body, id: data.length + 1}
    data.push(newData)
    
    res.status(201).json(newData)
}



exports.deleteData = (req, res) => {
    const {dataId} = req.params
    // constdataId = req.params.dataId => same you can use any
    const foundData = data.filter((e) => e.id === +dataId)

    if (foundData) { const newArray = data.filter((e) => e.id !== +dataId)
    data = newArray
    res.status(204).end()
    } else {
        res.status(404).end()
    }
}
