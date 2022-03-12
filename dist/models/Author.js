"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorModel = exports.AuthorSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//! PREGUNTAR: AL HACER POST, DA ERROR SI LA FECHA ES MAYOR A 2000, PERO SI LUEGO LO ACTUALIZO NO SE QUEJA
const AuthorSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    yearBirth: {
        type: Number,
        min: 0,
        max: 2000,
    },
});
exports.AuthorSchema = AuthorSchema;
const AuthorModel = mongoose_1.default.model('authors', AuthorSchema);
exports.AuthorModel = AuthorModel;
