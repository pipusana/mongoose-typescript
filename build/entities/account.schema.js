"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.AccountSchema = new mongoose_1.Schema({
    like: { type: Number, required: true },
    dislike: { type: Number, required: true }
});
