var alt = require('../alt');
var BeanWebAPI = require('../../api/BeanWebAPI');

class BeanItemActions {

    receiveBeanItem(beanItem) {
        this.dispatch(beanItem);
    }

    receiveBeanItemError(error) {
        this.dispatch(error);
    }

    requestBeanItem(beanID) {
        var actionDispatcher = this;

        actionDispatcher.dispatch();

        BeanWebAPI.requestBeanItem(beanID).then(function(beanItem) {

            actionDispatcher.actions.receiveBeanItem(beanItem);
            console.log("received bean item");

        }).catch(function(error) {

            actionDispatcher.actions.receiveBeanItemError(error);
            console.log(error);

        });

        console.log("requested bean item");
    }
}

module.exports = alt.createActions(BeanItemActions);