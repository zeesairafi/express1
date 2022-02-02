exports.logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
    next();
}

exports.errorHandlers = (error, req, res, next) => {
    res.status(error.status || 500).json({message: error.message || "Internal Server Issues"})
        // res.status(500).json({message: "Internal Error"})
    }
    
    
    exports.notFoundPage =(req, res, next) => {
        res.status(404).json({message:"Path Does Not Exist"})
    }