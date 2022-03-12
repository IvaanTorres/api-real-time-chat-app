"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//! MIDDLEARES
/* import { auth, role } from '../middlewares/auth' */
//! CONTROLLERS
const bookController_1 = __importDefault(require("../controllers/bookController"));
router.get('/', bookController_1.default.index);
router.post('/', bookController_1.default.store);
router.get('/add', bookController_1.default.create);
router.get('/:id', bookController_1.default.show); //? .show is down to let .create work
router.put('/:id', bookController_1.default.update);
router.get('/:id/edit', bookController_1.default.edit);
router.delete('/:id', bookController_1.default.destroy);
exports.default = router;
