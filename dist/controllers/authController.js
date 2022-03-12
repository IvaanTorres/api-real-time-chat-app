"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
//! MODELS
const Auth_1 = require("../models/Auth");
class AuthController {
    /**
     * Display the register form.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    showRegister(req, res) { }
    /**
     * Register.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, password } = req.body;
                const searchedUser = yield Auth_1.UserModel.findOne({
                    user: user,
                });
                if (searchedUser) {
                    const hashPassword = yield bcrypt_1.default.hash(password, 10);
                    const newUser = new Auth_1.UserModel({
                        user: user,
                        password: hashPassword,
                        role: '0',
                    });
                    yield newUser.save();
                    res.status(200).json(newUser);
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * Display the login form.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    showLogin(req, res) { }
    /**
     * Login.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, password } = req.body;
                const userFound = yield Auth_1.UserModel.findOne({
                    user: user,
                });
                const match = yield bcrypt_1.default.compare(password, userFound === null || userFound === void 0 ? void 0 : userFound.password);
                if (userFound != null && match) {
                    //Logged
                }
                else {
                    //Error: Didn't find / match
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * Logout.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    logout(req, res) {
        try {
            //Logout
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
const authController = new AuthController();
exports.default = authController;
