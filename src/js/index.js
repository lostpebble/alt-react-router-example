var React = require('react');
var router = require('./react/router');

router.run((Handler, state) => {
    React.render(<Handler {...state} />, document.body);
});