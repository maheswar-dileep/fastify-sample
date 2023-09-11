"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({
    logger: true,
});
const routes_js_1 = __importDefault(require("./routes/routes.js"));
fastify.register(routes_js_1.default, { prefix: '/api/v1/products' });
const start = async () => {
    try {
        fastify.listen({ port: 8801 }, () => {
            console.log(`Server Started on http://localhost:${8801}`);
        });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();