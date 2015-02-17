var ReactRouter = require('react-router');
var routes = require('./routes');

var router = ReactRouter.create({
    location : ReactRouter.HashLocation,
    routes : routes
});

module.exports = router;