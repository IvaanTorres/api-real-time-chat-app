"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//! CONTROLLERS
const indexController_1 = __importDefault(require("../controllers/indexController"));
router.get('/', indexController_1.default.index);
router.get('/error', indexController_1.default.error);
exports.default = router;
