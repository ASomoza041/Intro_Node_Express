const express = require("express");
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 8080;

var people = {
    
      "id": "ba924631-068e-4436-b6de-f3283fa848f0",
      "name": "Ashitaka",
      "gender": "male",
      "age": "late teens",
      "eye_color": "brown",
      "hair_color": "brown",
      "films": [
        "https://ghibliapi.herokuapp.com/films/030555b3-4c92-4fce-93fb-e70c3ae3df8b"
      ],
      "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
      "url": "https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0"
    },
    {
      "id": "030555b3-4c92-4fce-93fb-e70c3ae3df8b",
      "name": "Yakul",
      "age": "Unknown",
      "gender": "male",
      "eye_color": "Grey",
      "hair_color": "Brown"
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