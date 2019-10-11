const express = require("express");
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 8080;

var muk = {
      name: "Muk",
      gender: "male",
      age: "late teens",
      eye_color: "brown",
      hair_color: "brown"
    }
    
var snorlax =  {
    id: "bb924631-067e-4426-b3ce-f3282fa848f0",
    name: "Klye",
    gender: "male",
    age: "25",
    eye_color: "Blue",
    hair_color: "Blonde"
  }

var squirtle =  {
    id: "ba924631-068e-4436-b6de-f3283fa848f0",
    name: "Maria",
    gender: "female",
    age: "20",
    eye_color: "brown",
    hair_color: "red"
  }

var mudkip =  {
    id: "ba924631-068e-4436-b6de-f3283fa848f0",
    name: "Juan",
    gender: "male",
    age: "19",
    eye_color: "brown",
    hair_color: "brown"
  }



app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));



app.get('/', (req, res) => {
    res.render('index', {
        title: "Studio Ghibli",
        message: "Staff",
        data: staff1
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Studio Ghibli",
        message: "MARIA",
        data2: staff2
    });
});

app.get('/location', (req, res) => {
    res.render('location', {
        title: "Studio Ghibli",
        message: "Location",
        data3: staff3
    });
});

app.get('/reviews', (req, res) => {
    res.render('reviews', {
        title: "Studio Ghibli",
        message: "Reviews",
        data4: staff4
    });
});

app.get('/movies', (req, res) => {
    res.render('movies', {
        title: "Studio Ghibli",
        message: "Movies",
        data5: staff1
    });
});

const server = app.listen(port, () => {
    console.log(`its kinda working at ${server.address().port}`);
});