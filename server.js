const express = require("express");
const app = express();
const loremIpsum = require("lorem-ipsum");
const output = loremIpsum({ count: 3, units: "paragraphs", format: "html" });
const port = 8000;

app.use("/lorem", function(request, response) {
  response.send(output);
});

app.listen(port, function() {
  console.log("Spinning a server with express: Port", port);
});
