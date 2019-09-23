import { Router, Opts } from "urout";
import { createServer, Server as httpServer } from 'http';

class UServ extends Router {
    private server: httpServer;
    constructor(opts: Opts) {
        super(opts);
        this.server = opts && opts.server;
    }

    listen(port: number, err?: any) {
        (this.server = this.server || createServer()).on('request', this.handler);
        this.server.listen.apply(this.server, arguments);
    }
}

export function Server({
    onError = (err, req, res) => {
        res.end(err)
    }, onNoMatch = (req, res, next) => {
        res.end('no match');
    }
}: Opts = {}) {
    return new UServ({ onError, onNoMatch });
}