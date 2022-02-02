const Data = require("../../db/models/Data")





exports.fetchData = async(dataId) => {
    try{
    const data = await Data.findById(dataId)
    console.log(data);
   
    } catch (error){
       console.log(error);
    }
}

exports.gwtData = async (req, res) => {
    try{
        const dataArray = await Data.find()
        res.json(dataArray)
    } catch (error){ 
        res.status(500).json({ message: error.message})
    }
}



exports.createData=(req, res) => {
    
  try{
    const newData = await Data.create(req.body)
    res.status(201).json(newData)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
}



exports.deleteData = async (req, res) => {
    try{
    const {dataId} = req.params
    // constdataId = req.params.dataId => same you can use any
    await Data.findByIdAndDelete({_id: req.foundData.id}) 

    // if (foundData) {
    res.status(204).end()
    // } else {
    //     res.status(404).json({message: "not found"})
    // }
    } catch (error) {
        next(error)
    }
}

exports.updateData =  async (req, res, next) => {
    // const {dataId} = req.params
    try{
        const foundData = await Data.findByIdAndUpdate(
            {_id: req.datas.id}, 
            req.body,
            { new: true, runValidators: true}
        )
       res.json(foundData)
       
    } catch (error) {
        next(error)
    }
}

