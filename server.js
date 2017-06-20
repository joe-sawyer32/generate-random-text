const express = require("express");
const app = express();
const loremIpsum = require("lorem-ipsum");
const port = 8000;

app.get("/lorem", function(request, response) {
  var output = loremIpsum({
    count: 1,
    units: "paragraphs",
    format: "html"
  });
  response.send(output);
});

app.get("/lorem/:count", function(request, response) {
  var output = loremIpsum({
    count: request.params.count,
    units: "paragraphs",
    format: "html"
  });
  response.send(output);
});

app.listen(port, function() {
  console.log("Spinning a server with express: Port", port);
});
