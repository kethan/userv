import { Router, Opts } from "urout";
declare class UServ extends Router {
    private server;
    constructor(opts: Opts);
    listen(port: number, err?: any): void;
}
export declare function Server({ onError, onNoMatch }?: Opts): UServ;
export {};
