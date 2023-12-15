const express = require('express');
const db = require("./db");
const envelopes = express.Router();

module.exports = envelopes;

envelopes.post("/", (req, res, next) =>{
    try{
        const obj = db.addEnvelope(req.body);
        res.status(201).send(obj);
    }catch(err){
        next(err);
    }
});