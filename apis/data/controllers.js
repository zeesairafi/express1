




exports.gwtData = async (req, res) => {
    try{
        const dataArray = await Data.find()
        res.json(dataArray)
    } catch (error){ 
        res.status(500).json({ message: error.message})
    }
}

exports.fetchData = async(req, res) => {
    try{
    const data = await Data.find()
    res.json(data)
    } catch (error){
        res.status(500).json({message: error.message})
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
    const foundData = await Data.findByIdAndDelete({_id: dataId}) 

    if (foundData) {
    res.status(204).end()
    } else {
        res.status(404).json({message: "not found"})
    }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.updateData =  async (req, res) => {
    const {dataId} = req.params
    try{
        const foundData = await Event.findByIdAndUpdate(
            {_id: dataId}, 
            req.body,
            { new: true, runValidators: true}
        )
        if (foundData) res.json(foundData)
        else res.status(404).end()
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

