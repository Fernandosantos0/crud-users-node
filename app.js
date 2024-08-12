/* Importando os módulos */
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const { resolve } = require('path');

/* Importando o route */
const routes = require('./routes');

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.views();
        this.routes();
    }

    middlewares() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
        this.app.use(helmet());
        this.app.use(cors());

        this.app.use(session({
            name: 'my_session',
            secret: 'ekworeiu34594i46u54i6uy5i',
            cookie: {
                HttpOnly: false,
                maxAge: 60 * 60 * 24 * 7
            },
            genid: false,
            resave: {

            },
            rolling: false,
            saveUninitialized: false
        }));

        this.app.use(flash());
        this.app.use(express.static(resolve(__dirname, 'public')))
    }

    views() {
        this.app.set('views', resolve(__dirname, 'src', 'views'));
        this.app.set('view engine', 'ejs');
    }

    routes() {
        this.app.use(routes);
    }
}

module.exports = new App().app;