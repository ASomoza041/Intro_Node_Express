//https://pokeapi.co/api/v2/pokemon/diglett

const express = require("express");
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 8080;

var muk = {
    name: "Muk",
    type: "Poison",
    height: "3ft 11in",
    weight: "66.1 lbs",
    ability1: "Stench",
    ability2: "Sticky Hold"
}

var snorlax = {
    name: "Snorlax",
    type: "Normal",
    height: "6ft 11in",
    weight: "1014.1 lbs",
    ability1: "Thick Fat",
    ability2: "Immunity"
}

var squirtle = {
    name: "Squirtle",
    type: "Water",
    height: "1ft 08in",
    weight: "19.8 lbs",
    ability1: "Torrent"
}

var mudkip = {
    name: "Mudkip",
    type: "Water",
    height: "1ft 04in",
    weight: "16.8 lbs",
    ability1: "Torrent"
}



app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

fetch('https://pokeapi.co/api/v2/pokemon/diglett')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const {...img} = data.sprites;
    console.log(img);
  });

app.get('/', (req, res) => {
    res.render('index', {
        title: "Studio Ghibli",
        message: "Staff",
        data: muk
    });
});

app.get('/muk', (req, res) => {
    res.render('muk', {
        title: "Muk",
        data: muk
    });
});

app.get('/snorlax', (req, res) => {
    res.render('snorlax', {
        title: "Snorlax",
        data: snorlax
    });
});

app.get('/squirtle', (req, res) => {
    res.render('squirtle', {
        title: "Squirtle",
        data: squirtle
    });
});

app.get('/mudkip', (req, res) => {
    res.render('mudkip', {
        title: "Mudkip",
        data: mudkip
    });
});

const server = app.listen(port, () => {
    console.log(`its kinda working at ${server.address().port}`);
});