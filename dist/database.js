"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//! DOTENV CONFIG
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect(process.env.DB_CONNECTION +
    '://' +
    process.env.DB_HOST +
    ':' +
    process.env.DB_PORT +
    '/' +
    process.env.DB_DATABASE)
    .then((db) => console.log('Connected to MongoDB'))
    .catch((err) => console.log('An error occured during the MongoDB connection\nERROR: ' + err));
