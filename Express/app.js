const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const adminRouts = require('./routes/admin');
const userRoutes = require('./routes/shop');
const accountRoutes = require('./routes/account');
const errorConstroller = require('./controllers/errors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);
const User = require('./models/users');
const connectionString = 'mongodb://localhost/node-app';
const exchange = require('./controllers/exchange');


var store = new mongoDbStore({
    uri: connectionString,
    collection: 'mySession'
});

app.set('view engine', 'pug');
app.set('views', './views');

//Body-parser'ın middleware olarak uygulamaya eklenmesi. Bizim requestin bodysini parse etmemizi sağlar.
app.use(bodyParser.urlencoded({ extend: false }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    },
    store: store
}));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {

    if (!req.session.user) {
        return next();
    }

    User.findById(req.session.user._id)
        .then((user) => {
            req.user = user;
            next();
        }).catch((err) => {
            console.log(err);
        });
})


//Routes.     
app.use('/admin', adminRouts);
app.use(userRoutes);
app.use(accountRoutes);
app.use(errorConstroller.get404Page);

// exchange();
 
mongoose.connect(connectionString)
    .then(() => {
        app.listen(3000);
    }).catch((err) => {
        console.log(err); 
        
    });

