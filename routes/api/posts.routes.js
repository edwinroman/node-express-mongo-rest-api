const controller = require('../../controllers/posts.controller');

const PATH = 'api/posts';

module.exports = (app) => {
    app.get(`/${PATH}`, (request, response) => {
        response.send(controller.get());
    });

    app.post(`/${PATH}`, (request, response) => {
        response.send(controller.post());
    });
}