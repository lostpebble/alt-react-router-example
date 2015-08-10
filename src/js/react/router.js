var ReactRouter = require('react-router');
var routes = require('./routes');

var router = ReactRouter.create({
    location : ReactRouter.HistoryLocation,
    routes : routes
});

module.exports = router;