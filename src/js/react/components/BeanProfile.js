var React = require('react');
var BeanPowerListItem = require('./BeanPowerListItem');

var BeanProfile = React.createClass({

    render() {
        var beanColor = this.props.beanItem.bean_color;

        var imgStyle = {
            backgroundColor : beanColor
        };

        var spanStyle = {
            color: beanColor
        };

        if (this.props.beanItem.bean_powers) {
            var beanPowers = this.props.beanItem.bean_powers.map(function(power) {
                return (
                    <BeanPowerListItem power={power} key={power.power_name} />
                )
            });
        }

        return (
            <div>
                <img style={imgStyle} className="beanImage" src="public/image/bean_stencil.png" />
                <h2>The <span style={spanStyle}>{this.props.beanItem.bean_name}</span> bean</h2>
                <div className="bean-description">{this.props.beanItem.bean_description}</div>
                <div className="bean-powers">
                    <h2>Powers</h2>
                    <ul>{beanPowers}</ul>
                </div>
            </div>
        )
    }
});

module.exports = BeanProfile;