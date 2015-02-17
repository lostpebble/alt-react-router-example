var React = require('react');
var BeanItemStore = require('../../flux/stores/BeanItemStore');
var BeanItemActions = require('../../flux/actions/BeanItemActions');
var ListenerMixin = require('alt/mixins/ListenerMixin');

var BeanPowerListItem = require('../components/BeanPowerListItem');
var BeanProfile = require('../components/BeanProfile');

var BeanItemPage = React.createClass({
    mixins: [ListenerMixin],

    getInitialState() {
        return BeanItemStore.getState();
    },

    componentWillMount() {
        this.listenTo(BeanItemStore, this._onChange);
    },

    componentDidMount() {
        BeanItemActions.requestBeanItem(this.props.params.beanID);
    },

    _onChange() {
        this.setState(BeanItemStore.getState());
    },

    componentWillReceiveProps(nextProps) {
        if (this.props.params !== nextProps.params) {
            BeanItemActions.requestBeanItem(nextProps.params.beanID);
        }
    },

    render() {

        var elementToDisplay = null;

        // First check if it's loading
        // Then once loaded, check if there's an error
        // Show whatever element is required for each stage

        if (this.state.loadingBeanItem) {
            elementToDisplay = (
                <div className="loading-element">LOADING BEAN...</div>
            )
        } else {
            if (this.state.beanItemError) {
                elementToDisplay = (
                    <div className="error">{this.state.beanItemError}</div>
                )
            } else {
                elementToDisplay = (
                    <BeanProfile beanItem={this.state.beanItem} />
                )
            }
        }

        return (
            <div className="bean-item-page">
                {elementToDisplay}
            </div>
        );
    }
});

module.exports = BeanItemPage;