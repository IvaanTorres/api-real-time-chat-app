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
Object.defineProperty(exports, "__esModule", { value: true });
//! MODELS
const Book_1 = require("../models/Book");
class BookController {
    /**
     * Display a listing of the resource.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ error: "no" });
            /* try {
              const books: Book[] = await BookModel.find().lean() //? .lean() makes the arr of JSON Obj and not of Mongoose Obj
              res.status(200).json(books)
            } catch (error) {
              res.status(500).json(error)
            } */
        });
    }
    /**
     * Display the specified resource.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield Book_1.BookModel.findById(req.params.id).lean();
                res.status(200).json(book);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * Show the form for creating a new resource.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    create(req, res) { }
    /**
     * Store a newly created resource in storage.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, authorName, editorial, price } = req.body;
                const book = new Book_1.BookModel({
                    title: title,
                    editorial: editorial,
                    price: price,
                    author: {
                        name: authorName,
                    },
                });
                const newBook = yield book.save();
                res.status(201).json(newBook);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Update the specified resource in storage.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    //? In case of wanting to update a subdocument, use promises or $set
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, authorName, editorial, price } = req.body;
                let book = yield Book_1.BookModel.findByIdAndUpdate(req.params.id, {
                    $set: {
                        title: title,
                        editorial: editorial,
                        price: price,
                        author: { name: authorName },
                    },
                }, { new: true });
                res.status(201).json(book);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * Delete the specified resource from storage.
     *
     * @param req Request
     * @param res Response
     * @return Template view (render)
     */
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield Book_1.BookModel.findByIdAndDelete(req.params.id);
                res.status(200).json(book);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
const bookController = new BookController();
exports.default = bookController;
