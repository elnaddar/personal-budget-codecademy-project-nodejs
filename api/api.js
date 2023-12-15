const express = require("express");
const apiRouter = express.Router();

module.exports = apiRouter;

apiRouter.use("/envelopes", require("./envelopes"));

apiRouter.get("/", (req, res, next)=>{
    console.log("Hello World");
    res.send();
})

