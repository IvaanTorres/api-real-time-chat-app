"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
//! ROUTES
const book_1 = __importDefault(require("./routes/book"));
const index_1 = __importDefault(require("./routes/index"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
//! SETTINGS
app.set('port', process.env.PORT || 3000);
//! MIDDLEWARES
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false })); //Makes readable form data sent from client
app.use(express_1.default.json()); //Transform data to JSON before dealing with it
//! ROUTER
app.use('/', index_1.default);
app.use('/auth', auth_1.default);
app.use('/books', book_1.default);
exports.default = app;
