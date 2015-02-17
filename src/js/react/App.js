var React = require('react');
var { RouteHandler, Link } = require('react-router');
var { PropTypes } = React;

var App = React.createClass({

    propTypes: {
        params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div>
                <h1>Beans of War</h1>
                <ul className="navigation">
                    <Link to='home'><li className="navigation-item">HOME</li></Link>
                </ul>
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

module.exports = App;