const controller = require('../../controllers/users.controller');

const PATH = 'api/users';

module.exports = (app) => {
    app.get(`/${PATH}`, (request, response) => {
        response.send(controller.get());
    });

    app.post(`/${PATH}`, (request, response) => {
        response.send(controller.post());
    });
}