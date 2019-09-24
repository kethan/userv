# UServ

**Start developing server apps in seconds** ✨

Fast, unopinionated, minimalist server;)

A server based on [```urout```](https://github.com/kethan/urout)

# Features

* **Lightweight** - less than 1.7kb min+gzip
* **No Dependency** - No Bloating. No external dependencies
* **Express.js Middleware compatible** - Middleware support, including Express middleware you already know & love
* **Express.js identical API** - Nearly identical application API & route pattern definitions

# Install
```
$ npm install --save userve
```
# Usage

Simple

```js
const userve = require('userve');
const port = 3000;

let app = userve.Server();
let users = userve.Server()
    .get('/', (req, res) => {
        res.end('users!')
    })
app
    .use((req, res, next) => {
        console.log('mid');
        next();
    })
    .use('users', users)
    .get('/', (req, res) => {
        res.end('root /');
    })
    .get('/err', (req, res) => {
        throw 'e';
    })
    .listen(port, () => console.log(`Example app listening on port ${port}!`));
```

Complex with express middlewares
```js
const userve = require('userve');
const compression = require("compression");
const cors = require('cors');
const path = require('path')
const dir = path.join(__dirname, 'public');
const serve = require('serve-static')(dir);
const morgan = require("morgan");
const helmet = require("helmet");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

let birds = userve.Server()
    .get('/', function (req, res) {
        res.end('Birds home page')
    })
    .get('/about', function (req, res) {
        res.end('About birds')
    })

function one(req, res, next) {
    req.hello = 'world';
    next();
}

function two(req, res, next) {
    console.log('two');
    next();
}

userve.Server()
    .use(one, two)
    .use(compression())
    .use(serve)
    .use(cors())
    .use(morgan("common"))
    .use(helmet())
    .use('/birds', birds)
    .get('/', function (req, res) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Hello World!')
    })
    .post('/profile', upload.single('avatar'), function (req, res, next) {
        res.end('Upload Complete!');
    })
    .listen(3000)
```

# API

# License

MIT © Kethan Surana