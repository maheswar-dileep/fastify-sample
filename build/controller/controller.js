"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducts = exports.editProducts = exports.getProductbyId = exports.getProducts = exports.addProducts = void 0;
const services = __importStar(require("../services/services.js"));
//*--- add-products---*//
const addProducts = async (req, reply) => {
    try {
        const { name, price, stock, description } = req.body;
        const data = await services.addProducts({ name, price, stock, description });
        reply.code(200).send({
            statusCode: 200,
            msg: 'Get Products',
            data,
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
        const data = await services.findAllProducts();
        reply.code(200).send({
            statusCode: 200,
            msg: 'Get Products',
            data,
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
        const data = await services.findProductById(id);
        reply.code(200).send({
            statusCode: 200,
            msg: 'Get Products',
            data,
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
        const data = await services.editProducts(id, { name, price, stock, description });
        reply.code(200).send({
            statusCode: 200,
            msg: 'Product edited',
            data,
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
        const data = services.deleteProduct(id);
        reply.code(200).send({
            statusCode: 200,
            msg: 'Product deleted',
            data,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteProducts = deleteProducts;
