"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//! MIDDLEWARES
/* import { auth } from '../middlewares/auth' */
//! CONTROLLERS
const authController_1 = __importDefault(require("../controllers/authController"));
router.get('/register', authController_1.default.showRegister);
router.post('/register', authController_1.default.register);
router.get('/login', authController_1.default.showLogin);
router.post('/login', authController_1.default.login);
router.get('/logout', authController_1.default.logout);
exports.default = router;
