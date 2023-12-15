/* imports */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

/* app initialization */
const app = express();
const PORT = process.env.PORT || 3000;

/* morgan dev middleware for logging */
app.use(morgan('dev'));

/* middleware for handling CORS requests */
app.use(cors());

/* middware for parsing request bodies here */
app.use(bodyParser.json());

/* apiRouter to seperate logic */
const apiRouter = require("./api/api");
app.use("/", apiRouter);

/* error handle middleware */
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message);
});

/* start the server listening at PORT */
app.listen(PORT, () => {
    console.log("Running server on port: " + PORT);
});