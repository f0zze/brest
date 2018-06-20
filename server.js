const express = require("express");
var port = process.env.PORT || 3000;

const points = {
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
app.get("/", function (req, res) {
    res.send(JSON.stringify(points));
});
app.listen(port, function () {
    console.log(`Example app listening on port !`);
});