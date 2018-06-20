const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

let points = {
    p1:{
        id: "C3",
        signal: -72
    },
    p2: {
        id: "F0",
        signal: -70
    },
    p3: {
        id: "ED",
        signal: -68
    }
}

var app = express();
app.use(bodyParser());
app.use(cors());

app.get("/", function (req, res) {
    res.send(JSON.stringify(points));
});

app.post("/points", function (req,resp) {
    points.p1 = {
        id: "C3",
        signal: -72
    };
    resp.send("OK");
});
app.listen(port, function () {
    console.log(`Example app listening on port !`);
});