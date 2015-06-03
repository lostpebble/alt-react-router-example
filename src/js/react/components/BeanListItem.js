var React = require('react');
var { Link } = require('react-router');

var BeanListItem = React.createClass({

    render() {
        var itemStyle = {
            color: this.props.bean.bean_color
        };

        return(
            <Link to='beanItemPage' params={{beanID: this.props.bean.bean_id}}>
                <li style={itemStyle} className="bean-list-item" key={this.props.bean.bean_id}>
                    {this.props.bean.bean_name}
                </li>
            </Link>
        )
    }
});

module.exports = BeanListItem;