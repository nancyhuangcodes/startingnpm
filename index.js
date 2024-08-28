'use strict'; // inform the javascript engine that the code on this page uses struct rules

const express = require("express");

// Constants
const PORT = 8989;
const HOST = "git st";
const OS = require("os")
const ENV = "DEV";

// Application where we have endpoints that users can look for
const app = express(); // invoke the express library through instantiating it as a variable called app

app.get("/", (req, res) => {                            // req - listens for http://localhost:8989 to be called; res sets the statusCode to 200
    res.statusCode = 200;                               // returns a response.ok
    const msg = "Hello FSD Learner! Running Node.js";   // create a message to be returned
    res.send(msg);                                      // send a message to the user
});

app.get("/test", (req, res) => {                        // req - listens for http://localhost:8989/test to be called
    res.statusCode = 200;
    const msg = "Hello from/test Node!";
    res.send(msg);

});

app.listen(PORT, HOST);
// console.log("Running on PORT:" + PORT + " and HOST " + HOST);    // conventional way
console.log(`Running on http://${HOST}:${PORT}`);                  // using template strings to concatenate strings
console.log(OS.platform());