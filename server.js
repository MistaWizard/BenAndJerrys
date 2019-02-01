var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

// Routes
app.get("/icecream/:name", function(req, res) {
    for (let i = 0; i < icecreams.length; i++) {
        if (icecreams[i].name === req.params.name) {
            return res.render("index", icecreams[i]);
        }
    }
});

app.get("/icecreams", function(req, res) {
  res.render("all-icecream", { foods: icecreams });
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});



  