"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("./index.js"));
// import db from './src/models';
// import config from './src/config/config';
const app = (0, index_js_1.default)({
    logger: true,
});
const PORT = 8801;
// db.sequelize.sync().then(() => {
// app.listen({ port: Number(PORT) }, (err: any) => {
//   if (err) {
//     app.log.error(err);
//     process.exit(1);
//   }
//   app.log.info(`SERVE ON ${PORT}`);
// });
// });
const start = async () => {
    try {
        app.listen({ port: 8801 }, () => {
            console.log(`Server Started on http://localhost:${8801}`);
        });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
