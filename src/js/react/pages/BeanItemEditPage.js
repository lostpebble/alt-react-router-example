var React = require('react');

// Editing beans is not implemented yet
// Todo: Make the edit page

var BeanItemEditPage = React.createClass({
    render() {
        return (
            <div>
                <h2>e.d.i.t.i.n.g bean : {this.props.params.beanID}</h2>
            </div>
        );
    }
});

module.exports = BeanItemEditPage;