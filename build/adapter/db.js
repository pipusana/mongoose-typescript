"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DB = /** @class */ (function () {
    function DB(username, password, host, post, dbName, authName) {
        mongoose_1.connect("mongodb://" + username + ":" + password + "@" + host + ":" + post + "/" + dbName + "?authSource=" + authName, { useNewUrlParser: true, useUnifiedTopology: true });
        this._db = mongoose_1.connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);
    }
    DB.prototype.connection = function () {
        return this._db;
    };
    DB.prototype.connected = function () {
        console.log('Mongoose has connected');
    };
    DB.prototype.error = function (error) {
        console.log('**** error', error);
        throw error;
    };
    return DB;
}());
exports.DB = DB;
