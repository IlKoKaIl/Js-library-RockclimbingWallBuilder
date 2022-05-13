const express = require("express");
const app = express();
app.use(express.static("pub"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/landing.html");
});
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
