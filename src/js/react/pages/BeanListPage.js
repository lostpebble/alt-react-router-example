var React = require('react');
var BeanListActions = require('../../flux/actions/BeanListActions');
var BeanListStore = require('../../flux/stores/BeanListStore');
var ListenerMixin = require('alt/mixins/ListenerMixin');

var BeanListItem = require('../components/BeanListItem');

var BeanListPage = React.createClass({
    mixins: [ListenerMixin],

    getInitialState() {
        return BeanListStore.getState();
    },

    componentWillMount() {
        this.listenTo(BeanListStore, this._onChange);
    },

    componentDidMount() {

        // Simple way of implementing a caching of sorts...
        // Should probably be implemented properly in the
        // Web API though, not at the view level

        if (!this.state.beanList.length) {
            BeanListActions.requestBeanList();
        }
    },

    _onChange() {
        this.setState( BeanListStore.getState() );
    },

    render() {
        var beanList = null;

        if (this.state.loadingBeanList) {
            beanList = (
                <div className="loading-element">LOADING...</div>
            );
        } else {
            beanList = this.state.beanList.map(function(listItem) {
                return (
                    <BeanListItem key={listItem.bean_id} bean={listItem} />
                );
            })
        }

        return (
            <div>
                <h2>Take your pick </h2>
                <ul>
                    {beanList}
                </ul>
            </div>
        );
    }
});

module.exports = BeanListPage;