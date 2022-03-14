const express = require("express");
// const morgan = require('morgan')
const compression = require("compression");

const app = express();
const port = 3000;

// app.use(morgan('tiny'))
app.use(compression());

app.use(express.static(__dirname + "/public"));
// app.use(express.static('public'))
// app.use("/node_modules/bulma/css/bulma.min.css", express.static(__dirname + '/node_modules/bulma/css/bulma.min.css'));

app.listen(port, () => {
  console.log("App running on http://localhost:" + port);
});
