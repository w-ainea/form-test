// imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");

// constants
const app = express();
const port = 8000;

// middlewares
app.use(router);
app.use(cors({ origin: "http://localhost:5500/" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("App is up and running!!");
// });

app.listen(port, () => console.log(`App listening on port: ${port}`));
