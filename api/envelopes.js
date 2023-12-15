const express = require('express');
const db = require("./db");
const envelopes = express.Router();

module.exports = envelopes;

envelopes.get("/", (req, res, next) => {
    res.send(db.getAllEnvelopes());
})

envelopes.post("/", (req, res, next) => {
    try {
        const obj = db.addEnvelope(req.body);
        res.status(201).send(obj);
    } catch (err) {
        next(err);
    }
});

envelopes.get("/:enveId", (req, res, next) => {
    const id = req.params.enveId;
    try {
        const obj = db.getEnvelopeById(id);
        res.send(obj);
    } catch (err) {
        next(err);
    }
});

envelopes.put("/:enveId", (req, res, next) => {
    const id = req.params.enveId;
    try {
        const obj = db.updateEnvelopeById(id, req.body.title, req.body.budget);
        res.status(202).send(obj);
    } catch (err) {
        next(err);
    }
});


envelopes.delete("/:enveId", (req, res, next) => {
    const id = req.params.enveId;
    try {
        const obj = db.deleteEnvelope(id);
        res.status(202).send(obj);
    } catch (err) {
        next(err);
    }
});

envelopes.post("/transfer", (req, res, next) => {
    try {
        db.transferBudget(req.body.from, req.body.to, req.body.amount);
        res.sendStatus(201);
    } catch (err) {
        next(err);
    }
});
