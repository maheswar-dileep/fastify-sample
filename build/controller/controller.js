"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducts = exports.editProducts = exports.getProductbyId = exports.getProducts = exports.addProducts = void 0;
const product_model_js_1 = __importDefault(require("../model/product.model.js"));
//*--- add-products---*//
const addProducts = async (req, reply) => {
    try {
        const { name, price, stock, description } = req.body;
        const newProducts = new product_model_js_1.default({
            name,
            price,
            stock,
            description,
        });
        const product = await newProducts.save();
        reply.code(200).send({
            statusCode: 200,
            msg: 'Get Products',
            product,
        });
    }
    catch (error) {
        console.error(error);
        reply.code(500).send({
            statusCode: 500,
            error: 'Internal Server Error',
            message: 'An error occurred while processing your request',
        });
    }
};
exports.addProducts = addProducts;
//*--- Get-Products---*//
const getProducts = async (req, reply) => {
    try {
        const products = await product_model_js_1.default.find();
        reply.code(200).send({
            statusCode: 200,
            msg: 'Get Products',
            products,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getProducts = getProducts;
//*--- Get-Product-by-ID---*//
const getProductbyId = async (req, reply) => {
    try {
        const id = req.params?.id;
        const products = await product_model_js_1.default.find({ _id: id });
        reply.code(200).send({
            statusCode: 200,
            msg: 'Get Products',
            products,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getProductbyId = getProductbyId;
//*--- edit-Products---*//
const editProducts = async (req, reply) => {
    try {
        const id = req.params?.id;
        const { name, price, stock, description } = req.body;
        const product = await product_model_js_1.default.updateOne({ _id: id }, {
            name,
            price,
            stock,
            description,
        });
        reply.code(200).send({
            statusCode: 200,
            msg: 'Get Products',
            product,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.editProducts = editProducts;
//*--- delete-Products---*//
const deleteProducts = async (req, reply) => {
    try {
        const id = req.params?.id;
        const product = await product_model_js_1.default.deleteOne({ _id: id });
        reply.code(200).send({
            statusCode: 200,
            msg: 'Get Products',
            product,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteProducts = deleteProducts;
