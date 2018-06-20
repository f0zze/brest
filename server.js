const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

let points = {
    "F0:F5:67:84:84:40": 0,
    "ED:A5:26:6B:B6:52": 0,
    "C3:9C:42:81:79:D7": 0
};

var app = express();
app.use(bodyParser());
app.use(cors());

app.get("/", function (req, res) {
    res.send(JSON.stringify(points));
});

app.post("/points", function (req, resp) {
    const body = req.body;
    points[body.id] = parseInt(points[body.id], 10) * 0.8 + parseInt(body.signal, 10) * 0.2;
    resp.send("OK");
});
app.listen(port, function () {
    console.log(`Example app listening on port !`);
});