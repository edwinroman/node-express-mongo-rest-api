const controller = require('../../controllers/comments.controller');

const PATH = 'api/comments';

module.exports = (app) => {
    app.get(`/${PATH}`, (request, response) => {
        response.send(controller.get());
    });

    app.post(`/${PATH}`, (request, response) => {
        response.send(controller.post());
    });
}