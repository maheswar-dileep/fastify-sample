"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const getProducts = async (req, reply) => {
    try {
        const products = [
            {
                Id: 'jenlooper-cactus',
                Maker: '@jenlooper',
                img: 'https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg',
                Url: 'https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393',
                Title: 'The Quantified Cactus: An Easy Plant Soil Moisture Sensor',
                Description: 'This project is a good learning project to get comfortable with soldering and programming an Arduino.',
                Ratings: [5, 5],
            },
            {
                Id: 'jenlooper-cactus',
                Maker: '@jenlooper',
                img: 'https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg',
                Url: 'https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393',
                Title: 'The Quantified Cactus: An Easy Plant Soil Moisture Sensor',
                Description: 'This project is a good learning project to get comfortable with soldering and programming an Arduino.',
                Ratings: [5, 5],
            },
        ];
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
