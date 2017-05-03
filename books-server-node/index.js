var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }
});

let books = new Map();
books.set(1, {
    id: 1
    , title: "Blood of Elves"
    , description: "About a year before the beginning of the story, The Empire of Nilfgaard attacks."
});
books.set(2, {
    id: 2
    , title: "Time of Contempt"
    , description: "The story in Time of Contempt begins where the previous book left off."
});
books.set(3, {
    id: 3
    , title: "Baptism of Fire"
    , description: "Along their journey they meet a group of dwarves led by one..."
});
books.set(4, {
    id: 4
    , title: "The Tower of Swallows"
    , description: "Is the fourth novel of the series."
});

let id = 5;

app.route('/api/books/')
.get(function (req, res) {
    let result = [];
    books.forEach(x => result.push(x));
    res.send(result);
    })
.post(function (req, res) {
    let book = req.body;
    book.id = id++;
    books.set(book.id, book);
    res.json(book);
});

app.route('/api/books/:id').get(function (req, res) {
    let id = Number(req.params.id);
    let book = books.get(id);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).send('Not Found');
    }
}).put(function (req, res) {
    let id = Number(req.params.id);
    let book = req.body;
    if (books.get(id)) {
        book.id = id;
        books.set(id, book);
        res.json(book);
    }
    else {
        res.status(404).send('Not Found');
    }
}).delete(function (req, res) {
    let id = Number(req.params.id);
    if (books.delete(id)) {
        res.status(200).json('Deleted');
    }
    else {
        res.status(404).send('Not Found');
    }
});
app.listen(9000);