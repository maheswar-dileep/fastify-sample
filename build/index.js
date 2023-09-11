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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({
    logger: true,
});
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const routes_js_1 = __importDefault(require("./routes/routes.js"));
const db_config_js_1 = __importDefault(require("./config/db.config.js"));
const swagger = __importStar(require("./config/swagger.js"));
//*--- swagger-documentation ---*/
fastify.register(swagger_1.default, swagger.swaggerOptions);
fastify.register(swagger_ui_1.default, swagger.swaggerUiOptions);
//*--- Routes ---*/
fastify.register(routes_js_1.default, { prefix: '/api/v1/products' });
//*--- DB Conneciton ---*/
(0, db_config_js_1.default)();
//*--- Server Conneciton ---*/
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
