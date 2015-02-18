var alt = require('../alt');
var BeanWebAPI = require('../../api/BeanWebAPI');

class BeanListActions {

    receiveBeanList(list) {
        this.dispatch(list);
    }

    requestBeanList() {
        // Have to reference "this" so we can call
        // our own actions inside the promise return
        var actionDispatcher = this;

        // Call this action
        actionDispatcher.dispatch();

        // Promise is returned, when resolved call the received bean list action
        BeanWebAPI.requestBeanList().then(function(list) {

            actionDispatcher.actions.receiveBeanList(list);
            console.log("received the bean list");

        }).catch(function(error) {
            console.log(error);
        });

        console.log("requested the bean list");
    }
}

module.exports = alt.createActions(BeanListActions);
