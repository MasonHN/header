//imports
const express = require("express");
const db = require("../database/index");
const app = express();
const compression = require("compression");
const cors = require("cors");
const port = 3004;
const bodyParser = require("body-parser");

//middlewear
app.use(compression());
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser());

//routes
app.get("/api/info", (req, res) => {
  db.retrieveInfo((err, info) => {
    if (err) {
      console.log("error", err);
    } else {
      res.status(200);
      res.send(info);
    }
  });
});

//listen
app.listen(port, console.log(`listening on port ${port}`));
