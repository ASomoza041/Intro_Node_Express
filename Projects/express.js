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



app.get('/', (req, res) => {
    res.render('index', {
        title: "Studio Ghibli",
        message: "Staff",
        data: staff1
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Muk",
        data: muk
    });
});

app.get('/location', (req, res) => {
    res.render('location', {
        title: "Snorlax",
        data: snorlax
    });
});

app.get('/reviews', (req, res) => {
    res.render('reviews', {
        title: "Squirtle",
        data: squirtle
    });
});

app.get('/movies', (req, res) => {
    res.render('movies', {
        title: "Mudkip",
        data: mudkip
    });
});

const server = app.listen(port, () => {
    console.log(`its kinda working at ${server.address().port}`);
});