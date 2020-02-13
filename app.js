var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var auth = require('./verify');
var cors = require('cors');

const url = 'mongodb://localhost:27017/IlamTeaGarden';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});

connect.then((db) => {
    console.log("Connected to Database. Server running on port: 4000");
}, (err) => { console.log(err); });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var enquiriesRouter = require('./routes/enquiries');
var uploadRouter = require('./routes/upload');
var itemsRouter = require('./routes/items');
var adminRouter = require('./routes/admindashboard');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    name: 'session-id',
    secret: 'mysessionkey',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());



app.use('*', cors({
    origin: 'http://localhost:4000',
    credentials: true
}));
app.use('/', indexRouter);

app.use('/users', usersRouter);
//app.use(auth);
app.use('/enquiries', enquiriesRouter);
app.use('/items', itemsRouter);
app.use('/upload', uploadRouter);
app.use('/admindashboard', adminRouter);


module.exports = app;