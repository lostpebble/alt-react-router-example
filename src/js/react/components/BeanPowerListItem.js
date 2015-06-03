var React = require('react');

var BeanPowerListItem = React.createClass({

    render() {
        return(
            <li className="bean-power-item" key={this.props.power.power_name} >
                <span className="power-name">{this.props.power.power_name}</span>
                <span className="power-description">{this.props.power.power_description}</span>
            </li>
        )
    }
});

module.exports = BeanPowerListItem;