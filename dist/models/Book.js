"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.BookSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Author_1 = require("./Author");
//! SCHEMA
const BookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    editorial: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        min: 0,
    },
    author: Author_1.AuthorSchema,
});
exports.BookSchema = BookSchema;
//* Using the Schema, we create a MongoDB Collection called 'books' which will follow the requirements
let BookModel = mongoose_1.default.model('books', BookSchema);
exports.BookModel = BookModel;
