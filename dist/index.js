"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var urout_1 = require("urout");
var http_1 = require("http");
var UServ = /** @class */ (function (_super) {
    __extends(UServ, _super);
    function UServ(opts) {
        var _this = _super.call(this, opts) || this;
        _this.server = opts && opts.server;
        return _this;
    }
    UServ.prototype.listen = function (port, err) {
        (this.server = this.server || http_1.createServer()).on('request', this.handler);
        this.server.listen.apply(this.server, arguments);
    };
    return UServ;
}(urout_1.Router));
function Server(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.onError, onError = _c === void 0 ? function (err, req, res) {
        res.end(err);
    } : _c, _d = _b.onNoMatch, onNoMatch = _d === void 0 ? function (req, res, next) {
        res.end('no match');
    } : _d;
    return new UServ({ onError: onError, onNoMatch: onNoMatch });
}
exports.Server = Server;
