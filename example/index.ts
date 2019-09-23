import { Server } from "../src";
const port = 3000;

let app = Server();
let users = Server()
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