const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

let points = {
    "F0:F5:67:84:84:40": 0,
    "D7:CD:B3:5F:58:DA": 0,
    "C3:9C:42:81:79:D7": 0
};

var app = express();
app.use(bodyParser());
app.use(cors());

app.get("/", function (req, res) {
    res.send(JSON.stringify(points));
});

app.post("/points", function (req,resp) {

    const body = req.body;
    points[body.id] = body.signal;
    resp.send("OK");
});
app.listen(port, function () {
    console.log(`Example app listening on port !`);
});