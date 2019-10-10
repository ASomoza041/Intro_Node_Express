const express = require("express");
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 8080;

var people = {
      id: "ba924631-068e-4436-b6de-f3283fa848f0",
      name: "Ashitaka",
      gender: "male",
      age: "late teens",
      eye_color: "brown",
      hair_color: "brown"
    }
    


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));



// fetch("https://ghibliapi.herokuapp.com/people")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   });
  





app.get('/', (req, res) => {
    res.render('index', {
        title: "Studio Ghibli",
        message: "Staff",
        data: people
    });
});

const server = app.listen(port, () => {
    console.log(`its kinda working at ${server.address().port}`);
});